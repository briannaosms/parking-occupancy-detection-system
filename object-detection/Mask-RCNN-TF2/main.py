# This program processes an image using the Mask R-CNN object detection
#   algorithm and sends those results to a SQL database.

from keras.utils import load_img
from keras.utils import img_to_array
from mrcnn.config import Config
from mrcnn.model import MaskRCNN
from matplotlib import pyplot
from matplotlib.patches import Rectangle
from mrcnn.visualize import display_instances
from mrcnn import utils
import numpy as np

# Define the test configuration for MRCNN
class TestConfig(Config):
    NAME = "test"
    GPU_COUNT = 1
    IMAGES_PER_GPU = 1
    NUM_CLASSES = 1 + 80

# 2.1
# params: rois -- numpy ndarray
#         class_ids -- numpy ndarray
# desc: given the mrcnn detection results, filter the results for cars and 
#       trucks and return a list of those results
def get_bounding_boxes(rois, class_ids):
    boxes = []

    # iterate through detection results to filter cars and trucks only
    for i in range(len(rois)):
        # if the class id is a car(3) or truck(8), then append it to boxes
        if(class_ids[i] in [3, 8]):
            boxes.append(rois[i])
   
    return boxes

# 2.2 + 2.3
def show_results(filename, boxes):
    # Load the image.
    data = pyplot.imread(filename)
    # Plot the image.
    pyplot.imshow(data)
    # Get the content for drawing boxes.
    ax = pyplot.gca()
    
    # Draw each box.
    for i in range(len(boxes)):
        # Get coordinates of the box.
        y1, x1, y2, x2 = boxes[i]

        # Calculate the width and height of each box.
        width, height = (x2 - x1), (y2 - y1)

        # Create the box.
        rect = Rectangle((x1, y1), 
                         width, 
                         height, 
                         fill=False, 
                         color="orange", 
                         linewidth=1)
        
        # Label each box
        label = "ID: " + str(i)
        ax.text(x1, y1 + 8, label, color="w", size=11, backgroundcolor="none")
        
        # Draw the box
        ax.add_patch(rect)

    # Show the results.
    pyplot.show()

def draw_box(ax, box, col):
    # Get coordinates of the box.
    y1, x1, y2, x2 = box

    # Calculate the width and height of each box.
    width, height = (x2 - x1), (y2 - y1)
    
    # Create the box.
    rect = Rectangle((x1, y1), 
                        width, 
                        height, 
                        fill=False, 
                        color=col, 
                        linewidth=1)

    # # Label each box
    # label = "ID: " + str(id)
    # ax.text(x1, y1 + 8, label, color="w", size=11, backgroundcolor="none")
    
    # Draw the box
    ax.add_patch(rect)


# <>
def main():
    # [SETUP] Define file names.
    model_weights_filename = "mask_rcnn_coco.h5"
    image_filename = "../images/pl-cropped.jpg"
    image2_filename = "../images/pl-cropped-edited.jpg"
    parking_boxes = []

    # Load the image.
    image = load_img(image_filename)
    image = img_to_array(image)


    # [OBJECT DETECTION]
    # Define the model, load weights, and make prediction.
    rcnn = MaskRCNN(mode="inference", model_dir="./", config=TestConfig())
    rcnn.load_weights(model_weights_filename, by_name=True)
    results = rcnn.detect([image], verbose=0)
        # 1.1 train last few layers using parking lot dataset
        # 1.2 test layers using the same dataset


    # [IMAGE PROCESSING]
    # 2. extract results from image
    # Load the image.
    data = pyplot.imread(image_filename)
    # Plot the image.
    pyplot.imshow(data)
    # Get the content for drawing boxes.
    ax = pyplot.gca()

    # If this loop iteration is the first run, assume all detected cars are
    #   parking spaces. Also assumes that parking spaces are full?
    if(parking_boxes is None):
        parking_boxes = get_bounding_boxes(results[0]["rois"], 
                                           results[0]["class_ids"])
    # Otherwise, we know where the parking spaces are. Determine is any
    #   parking spaces are empty.
    else:
        vehicle_boxes = get_bounding_boxes(results[0]["rois"], 
                                           results[0]["class_ids"])
        
        # Determine overlap of known parking spaces and vehicles
        overlaps = utils.compute_overlaps(parking_boxes, vehicle_boxes)

        # Assume not spaces are free until we find one that is free
        free_space = False

        # Iterate through each known parking space
        for parking_space, overlap_areas in zip(parking_boxes, overlaps):
            # Calculate the max amount that the parking space was covered by
            #   any car that was detected.
            max_iou_overlap = np.max(overlap_areas)
        
            # Determine if parking space is occupied by more than 0.15 IoU
            if(max_iou_overlap < 0.15):
                # Draw green box indicating the parking space is empty
                draw_box(ax, parking_space, "green")

                # Flag a free space
                free_space = True
            else:
                # Draw a red rectangle indicating the parking spaces is 
                #   occupied
                draw_box(ax, parking_space, "red")
             

    # [IMAGE VISUALIZATION]
    # 2.2 label each bounding box with an id (place in list)
            # organize by lot section (x or y values)
    # 2.3 draw results on figure and either show or save figure
    # show_results(image_filename, vehicle_boxes)
    # Show the results.
    pyplot.show()

    # 3. compare the differences between old image results and new image results
        # 3.1 iterate through each parking space to ensure results differ
        # 3.2 figure out to how link results from this program to db
        # 3.3 if results differ, store and send info to db


if(__name__ == "__main__"):
    main()