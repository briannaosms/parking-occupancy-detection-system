#
#         Team: Ctrl-Alt-Elites
# Team Members: Brianna Stewart, Corey Belk-Scroggins, Garrett Jones, Landon 
#               Tomkins
#  Description: This program iteratively retreives an image, processes it using
#               the Mask R-CNN object detection algorithm, and sends the
#               results of that processing to a MySQL database.
#         Date: 02 April 2023

from keras.utils import load_img
from keras.utils import img_to_array
from mrcnn.config import Config
from mrcnn.model import MaskRCNN
from matplotlib import pyplot
from matplotlib.patches import Rectangle
from mrcnn.visualize import display_instances
from mrcnn import utils
from dotenv import load_dotenv
import numpy as np
import mysql.connector
import os 

# Main function of the program
def main():
    # [SETUP] 
    print("Starting setup...")
    # Define file names and required variables
    model_weights_filename = "../mask_rcnn_coco.h5"
    image_filename = "../images/parking-lot-2.jpg"
    # List of all the parking spaces bounding boxes in parking lot
    parking_boxes = []
    # List of all the occupied vehicle spaces bounding boxes in parking lot
    vehicle_boxes = []

    # Define SQL constants
    env_dir = "../../"
    env_filename = ".env"
    env_path = os.path.join(env_dir, env_filename)
    try:
        os.path.exists(env_path)
        load_dotenv(env_path)
        username = os.getenv("SQL_USERNAME")
        password = os.getenv("SQL_ROOT_PASSWORD")
        database = os.getenv("SQL_DATABASE")
        host = os.getenv("HOST")
    except Exception as e:
        print("ERROR: Failed to retrieve credentials\n" + e)
        exit()
    print("Completed setup.\n")


    # [IMAGE RETRIEVAL]
    # print("Starting image retrieval...")
    # # TO-DO: Add image retrieval algorithm here...
    # print("Completed image retrieval.\n")


    # [OBJECT DETECTION]
    print("Starting object detection...")
    # Load the image
    # image = load_img(image_filename)
    # image = img_to_array(image)
    
    # # Define the model, load weights, and make prediction.
    # rcnn = MaskRCNN(
    #     mode="inference", 
    #     model_dir="./", 
    #     config=ParkingLotConfig()
    # )
    # rcnn.load_weights(model_weights_filename, by_name=True)
    # results = rcnn.detect([image], verbose=0)
    print("Completed object detection.\n")


    # [IMAGE PROCESSING & VISUALIZATION]
    print("Starting image processing...")
    # Load the image.
    data = pyplot.imread(image_filename)
    # Plot the image.
    pyplot.imshow(data)
    # Get the content for drawing boxes.
    ax = pyplot.gca()

    # Since this is the first run, the first detection are parking spaces
    # parking_boxes = get_bounding_boxes(results[0]["rois"], 
    #                                    results[0]["class_ids"])

    # Iterate through each known parking space
    # for parking_space in results[0]["rois"]:#parking_boxes:
    #     # Draw a red rectangle indicating the parking spaces is 
    #     #   occupied
    #     y1, x1, y2, x2 = parking_space
    #     print(f"({y1}, {x1}) ({y2}, {x2})")
    #     draw_box(ax, parking_space, "red")
             
    # Show the results.
    pyplot.savefig("demo-output")

    # If this loop iteration is the first run, assume all detected cars are
    #   parking spaces. Also assumes that parking spaces are full?
    # if(parking_boxes is None):
    #     parking_boxes = get_vehicle_bboxes(results[0]["rois"], 
    #                                        results[0]["class_ids"])
    # # Otherwise, we know where the parking spaces are. Determine is any
    # #   parking spaces are empty.
    # else:
    #     vehicle_boxes = get_vehicle_bboxes(results[0]["rois"], 
    #                                        results[0]["class_ids"])
        
    #     # Determine overlap of known parking spaces and vehicles
    #     overlaps = utils.compute_overlaps(parking_boxes, vehicle_boxes)

    #     # Assume not spaces are free until we find one that is free
    #     free_space = False

    #     # Iterate through each known parking space
    #     for parking_space, overlap_areas in zip(parking_boxes, overlaps):
    #         # Calculate the max amount that the parking space was covered by
    #         #   any car that was detected.
    #         max_iou_overlap = np.max(overlap_areas)
        
    #         # Determine if parking space is occupied by more than 0.15 IoU
    #         if(max_iou_overlap < 0.15):
    #             # Draw green box indicating the parking space is empty
    #             draw_box(ax, parking_space, "green")

    #             # Flag a e space
    #             free_space = True
    #         else:
    #             # Draw a red rectangle indicating the parking spaces is 
    #             #   occupied
    #             draw_box(ax, parking_space, "red")
    
    # TO-DO: Make stats from image results
    # Organize ID results...
    # Create variables for data sharing
    lot_name = "nethken"
    lot_id = 0
    max_spaces_faculty = 0
    max_spaces_student = 0
    max_spaces_handicapped = 0
    max_spaces_visitor = 0
    current_spaces_faculty = 0
    current_spaces_student = 0
    current_spaces_handicapped = 0
    current_spaces_visitor = 0
    datetime = ""
    print("Completed image processing.\n")

    # [DATA SHARING]
    # Create the connection to the database.
    # conn = mysql.connector.connect(
    #     user=username,
    #     password=password,
    #     host=host,
    #     database=database
    # )

    # # Create a cursor object.
    # cursor = conn.cursor()

    # # Create SQL insert query.
    # sql = """
    #     INSERT INTO ParkingLot(
    #         LotName, 
    #         ID, 
    #         MaxSpacesFaculty, 
    #         MaxSpacesStudent, 
    #         MaxSpacesHandicapped, 
    #         MaxSpacesVisitor, 
    #         CurrentSpacesFaculty, 
    #         CurrentSpacesStudent, 
    #         CurrentSpacesHandicapped, 
    #         CurrentSpacesVisitor, 
    #         Datetime
    #     )
    #     VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    # """
    # data = (lot_name,
    #         lot_id,
    #         max_spaces_faculty,
    #         max_spaces_student,
    #         max_spaces_handicapped,
    #         max_spaces_visitor,
    #         current_spaces_faculty,
    #         current_spaces_student,
    #         current_spaces_handicapped,
    #         current_spaces_visitor,
    #         datetime
    # )

    # # Insert results into the database.
    # try:
    #     cursor.execute(sql, data)
    #     conn.commit()
    # except:
    #     conn.rollback()

    # # Close the connection to the database.
    # conn.close()


def get_vehicle_bboxes(rois, class_ids):
    #  Parameters: rois -- numpy ndarray of vehicle bounding boxes
    #              class_ids -- numpy ndarray of vehicle class ids
    # Description: Given the MRCNN detection results (rois & class_ids), filter
    #              the results for cars and trucks, then return a list of those
    #              results.
    bboxes = []

    # Iterate through bounding boxes to filter only cars and trucks
    for i in range(len(rois)):
        # If the class id is a car(3) or truck(8), then append it to the list
        if(class_ids[i] in [3, 8]):
            bboxes.append(rois[i])
   
    return np.array(bboxes)

def draw_box(ax, box, color):
    #  Parameters: ax -- pyplot axes instance
    #              box -- vehicle bounding box
    #              color -- box color
    # Description: Draw a box with pylot using the vehicle bounding box 
    #              coordinates.
    
    # Get coordinates of the box.
    y1, x1, y2, x2 = box

    # Calculate the width and height of each box.
    width, height = (x2 - x1), (y2 - y1)
    
    # Create the box.
    rect = Rectangle(
        (x1, y1), 
        width, 
        height, 
        fill=False, 
        color=color, 
        linewidth=1
    )

    # # Label each box
    # label = "ID: " + str(id)
    # ax.text(x1, y1 + 8, label, color="w", size=11, backgroundcolor="none")
    
    # Draw the box
    ax.add_patch(rect)


class ParkingLotConfig(Config):
    # The parking lot configuration for MRCNN.
    NAME = "test"
    GPU_COUNT = 1
    IMAGES_PER_GPU = 1
    NUM_CLASSES = 1 + 80


if(__name__ == "__main__"):
    main()