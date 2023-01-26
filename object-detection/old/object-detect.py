from keras.utils import load_img
from keras.utils import img_to_array
from mrcnn.config import Config
from mrcnn.model import MaskRCNN
from matplotlib import pyplot
from matplotlib.patches import Rectangle
from mrcnn.visualize import display_instances

# Define the test configuration
class TestConfig(Config):
    NAME = "test"
    GPU_COUNT = 1
    IMAGES_PER_GPU = 1
    NUM_CLASSES = 1 + 80

def main():
    # Define the classes
    # class_names = ["car", "motorcycle", "truck", "boat"]
    class_names = ['BG', 'person', 'bicycle', 'car', 'motorcycle', 'airplane',
               'bus', 'train', 'truck', 'boat', 'traffic light',
               'fire hydrant', 'stop sign', 'parking meter', 'bench', 'bird',
               'cat', 'dog', 'horse', 'sheep', 'cow', 'elephant', 'bear',
               'zebra', 'giraffe', 'backpack', 'umbrella', 'handbag', 'tie',
               'suitcase', 'frisbee', 'skis', 'snowboard', 'sports ball',
               'kite', 'baseball bat', 'baseball glove', 'skateboard',
               'surfboard', 'tennis racket', 'bottle', 'wine glass', 'cup',
               'fork', 'knife', 'spoon', 'bowl', 'banana', 'apple',
               'sandwich', 'orange', 'broccoli', 'carrot', 'hot dog', 'pizza',
               'donut', 'cake', 'chair', 'couch', 'potted plant', 'bed',
               'dining table', 'toilet', 'tv', 'laptop', 'mouse', 'remote',
               'keyboard', 'cell phone', 'microwave', 'oven', 'toaster',
               'sink', 'refrigerator', 'book', 'clock', 'vase', 'scissors',
               'teddy bear', 'hair drier', 'toothbrush']

    # Define the model
    rcnn = MaskRCNN(mode="inference", model_dir="./", config=TestConfig())

    # Load the coco model weights
    rcnn.load_weights("mask_rcnn_coco.h5", by_name=True)

    # Load image
    img_filename = "parking-lot-2.jpg"
    img = load_img(img_filename)
    img = img_to_array(img)

    # Make prediction
    results = rcnn.detect([img], verbose=0)

    # Get dictionary for first predicition
    r = results[0]
    # Show photo with bounding boxes, masks, class labels, and scores
    display_instances(img, r["rois"], r['masks'], r['class_ids'], class_names, r['scores'])

if(__name__ == "__main__"):
    main()