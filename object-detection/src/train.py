import xml.etree.ElementTree as et
from mrcnn.utils import Dataset
import os
import numpy as np
from mrcnn.config import Config
from mrcnn.model import MaskRCNN
from matplotlib import pyplot

import tensorflow as tf

class ParkingLotDataset(Dataset):
    # load the dataset definitions
    def load_dataset(self, dataset_dir, is_train=True):
        # define the class
        self.add_class("parking_lot", 1, "parking_lot")
        self.add_class("parking_lot", 2, "parking_lot")

        # find all images
        # count = 0
        for filename in os.listdir(dataset_dir):
            if(filename[-4:] == ".jpg"):
                id = filename[:19]
              
                # # if training, skip all images after 150 images
                # if(is_train and count >= 100):
                #     continue

                # # if testing, skip all images before 150 images
                # if(not is_train and count <= 150):
                #     continue

                # define image and annotation paths
                image_path = dataset_dir + id + ".jpg"
                annot_path = dataset_dir + id + ".xml"

                # add image to dataset
                self.add_image("parking_lot", image_id=id, path=image_path, annotation_path=annot_path)
                # count += 1


    # extract bounding boxes from annotation (xml) file
    def extract_bboxes(self, filename):
        # load and parse the file
        tree = et.parse(filename)

        # get the root of the document
        rt = tree.getroot()

        # extract information (id and bounding box (center, size, and angle))
        spaces = []
        for space in rt.iter("space"):
            id = int(space.attrib["occupied"])
            for bbox in space.findall("rotatedRect/center"):
                x = int(bbox.get("x"))
                y = int(bbox.get("y"))

            for bbox in space.findall("rotatedRect/size"):
                w = int(bbox.get("w"))
                h = int(bbox.get("h"))
            
            for bbox in space.findall("rotatedRect/angle"):
                d = int(bbox.get("d"))

            data = [id, x, y, w, h, d]
            spaces.append(data)

        return spaces


    # load the masks for an image
    def load_mask(self, image_id):
        # get details of image
        info = self.image_info[image_id]
        # define bbox file location
        path = info["annotation_path"]
        # load and extract bboxes from xml file
        bboxes = self.extract_bboxes(path)
        # create an array for all masks with each on a different channel
        masks = np.zeros([720, 1280, len(bboxes)], dtype="uint8")
        
        # create masks
        class_ids = []
        for i in range(len(bboxes)):
            bbox = bboxes[i]
            class_id, x, y, w, h, d = bbox
            row_s, row_e = y-(w), y+(w//2)
            col_s , col_e = x-(h//2), x+(h//2)
            masks[row_s:row_e, col_s:col_e, i] = 1
        
            if(class_id == 1):
                class_ids.append(self.class_names.index("parking_lot"))
            elif(class_id == 0):
                class_ids.append(self.class_names.index("parking_lot"))
                
        return masks, np.asarray(class_ids, dtype="int32")


    # load an image reference
    def image_references(self, image_id):
        info = self.image_info[image_id]
        return info["path"]


class ParkingLotConfig(Config):
    NAME = "parking_lot"
    NUM_CLASSES = 1 + 2
    STEPS_PER_EPOCH = 50
    GPU_COUNT = 1
    IMAGES_PER_GPU = 2


# main function of program
def main():
    # define storage locations
    tr_dataset_dir = "../datasets/parking-lot/PUCPR/Rainy/2012-09-16/"
    te_dataset_dir = "../datasets/parking-lot/PUCPR/Rainy/2012-09-21/"
    coco_weights_filename = "/app/mask_rcnn_coco.h5"
    # coco_weights_path = os.path.abspath(coco_weights_filename)
    # print(coco_weights_path)

    # train dataset
    training_set = ParkingLotDataset()
    training_set.load_dataset(tr_dataset_dir, is_train=True)
    training_set.prepare()
    print("train: %d" % len(training_set.image_ids))

    # test dataset
    testing_set = ParkingLotDataset()
    testing_set.load_dataset(te_dataset_dir, is_train=False)
    testing_set.prepare()
    print("test: %d" % len(testing_set.image_ids))

    # execute training and testing
    config = ParkingLotConfig()
    config.display()
    model = MaskRCNN(mode="training", model_dir="./", config=config)
    model.load_weights(coco_weights_filename, by_name=True, exclude=["mrcnn_class_logits", "mrcnn_bbox_fc", "mrcnn_mask"])
    model.train(training_set, testing_set, learning_rate=config.LEARNING_RATE, epochs=5, layers="heads")

if(__name__ == "__main__"):
    main()