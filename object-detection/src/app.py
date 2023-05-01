#
#         Team: Ctrl-Alt-Elites
# Team Members: Brianna Stewart, Corey Belk-Scroggins, Garrett Jones, Landon 
#               Tomkins
#  Description: This program iteratively retreives an image, processes it using
#               the YOLOv7 object detection algorithm, and sends the
#               results of that processing to a MySQL database.
#         Date: 01 May 2023


import math
import matplotlib.pyplot as plt
import mysql.connector
import os 
import sys
import pytz
import time
import torch

from datetime import datetime
from dotenv import load_dotenv
from models.experimental import attempt_load
from utils.datasets import LoadImages
from utils.general import check_img_size, non_max_suppression, scale_coords
from utils.torch_utils import select_device, time_synchronized


# Main function of the program
def main():
    # [ARGUMENT CHECKING]
    if(len(sys.argv) <= 1 or int(sys.argv[1]) < 15):
        print("Correct usage: python app.py <sleep-timer-in-secs>")
        exit()
    else:
        sleep_timer = int(sys.argv[1])


    # [SETUP] 
    print("Starting setup...")
    # Define file names and required variables
    model_weights_filename = "yolov7.pt"
    image_filename = "/app/output/nethken-edited.png"
    results_filename = "/app/output/nethken-bboxes.txt"
    plotted_results_filename = "/app/output/nethken-results.png"
    conf_threshold = 0.3
    iou_threshold = 0.45
    timer = 1 # in hours
    fmt = "%Y-%m-%d %H:%M:%S"
    tz = pytz.timezone('America/Chicago')

    # Import crendentials for SQL constants
    env_dir = "./"
    env_filename = ".env"
    env_path = os.path.join(env_dir, env_filename)
    try:
        os.path.exists(env_path)
        load_dotenv(env_path)
        username = os.getenv("SQL_USERNAME")
        password = os.getenv("SQL_ROOT_PASSWORD")
        database = os.getenv("SQL_DATABASE")
        host = os.getenv("SQL_HOST")
        port = os.getenv("SQL_PORT")
    except Exception as e:
        print("ERROR: Failed to retrieve credentials\n" + e)
        exit()
    print("Completed setup.\n")

    loop_start = datetime.now().astimezone(tz)
    elapsed_time = hours = minutes = iterations = 0

    # [MAIN LOOP]
    # Iteratively detect cars, process results, and send results to DB.
    while(hours <= timer):
        # [STATISTICS]
        print(f"\n[{int(hours)} hr {int(minutes)} m elapsed]: {int(timer-hours)} hr remaining")
        print(f"[Iteration {iterations}]")
        start = time.time()

        # [OBJECT DETECTION]
        print("\tStarting object detection...")
        detect(results_filename, image_filename, model_weights_filename, conf_threshold, iou_threshold)
        print("\tCompleted object detection.\n")


        # [IMAGE PROCESSING & VISUALIZATION]
        print("\tStarting image processing...")
        organized_bboxes = organize_bboxes(results_filename)
        plot_centroids(image_filename, organized_bboxes, plotted_results_filename)

        # Create values for the parking lot
        lot_name = "Nethken"
        lot_id = 0
        max_faculty = 8
        max_student = 27
        max_handicapped = 2
        max_visitor = 0
        dt = datetime.now().astimezone(tz).strftime(fmt)

        # Determine the taken spots for parking lot based on manual (x,y) mapping.
        taken_faculty, \
        taken_student, \
        taken_handicapped, \
        taken_visitor = count_centroids(organized_bboxes)

        # Determine the available spots for the parking lot.
        current_faculty = max_faculty - taken_faculty
        current_student = max_student - taken_student
        current_handicapped = max_handicapped - taken_handicapped
        current_visitor = max_visitor - taken_visitor

        print(f"\t\tThe amount of student spaces found was {current_student}.")
        print(f"\t\tThe amount of faculty spaces found was {current_faculty}.")
        print(f"\t\tThe amount of handicapped spaces found was {current_handicapped}.")
        print(f"\t\tThe amount of visitor spaces found was {current_visitor}.")
        print("\tCompleted image processing.\n")
        
    
        # [DATA SHARING]
        print("\tStarting data transfer to MySQL database...")
        # Create the connection to the database.
        conn = mysql.connector.connect(
            user=username,
            password=password,
            host=host,
            port=port,
            database=database
        )
        # Create a cursor object.
        cursor = conn.cursor()

        # Create SQL insert query.
        sql = """
            INSERT INTO ParkingLot(
                LotName, 
                ID, 
                MaxSpacesFaculty, 
                MaxSpacesStudent, 
                MaxSpacesHandicapped, 
                MaxSpacesVisitor, 
                CurrentSpacesFaculty, 
                CurrentSpacesStudent, 
                CurrentSpacesHandicapped, 
                CurrentSpacesVisitor, 
                DT
            )
            VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """
        data = (lot_name,
                lot_id,
                max_faculty,
                max_student,
                max_handicapped,
                max_visitor,
                current_faculty,
                current_student,
                current_handicapped,
                current_visitor,
                dt
        )

        # Insert results into the database.
        try:
            cursor.execute(sql, data)
            conn.commit()
            print("\t\tSuccessfully inserted data.")
        except Exception as e:
            print(str(e))
            conn.rollback()
            exit()

        # Close the connection to the database.
        conn.close()
        print("\tCompleted data transfer.")


        # [STATISTICS]
        end = time.time()
        print(f"\n\tIteration completed in {end-start:.1f}s")
        loop_current = datetime.now().astimezone(tz)
        elapsed_time = (loop_current - loop_start).seconds
        minutes = round((elapsed_time % 3600) / 60, 2)
        hours = round(minutes / 60, 2)
        iterations += 1

        # Wait for the next iteration.
        print(f"\tWaiting for {sleep_timer} s...")
        time.sleep(sleep_timer)



# Counts the centroids with respect to the space categories.
def count_centroids(centroids):
    # Defined ranges for detecting student parking spots
    student_range = [[0, 0], [1600, 350]]
    # Defined ranges for detecting faculty parking spots
    faculty_range = [[0, 400], [1815, 700]]
    # Defined ranges for detecting handicapped parking spots
    handicapped_range = [[25, 0], [400, 125]]
    # Defined ranges for detecting visitor parking spots
    visitor_range = [[0, 0], [0, 0]]

    student_spaces = faculty_spaces = handicapped_spaces = visitor_spaces = other_objects = 0

    # Loop to check each centroid in the list
    for i in range(len(centroids)):
        if(handicapped_range[0][0] <= centroids[i][0] <= handicapped_range[1][0] and
           handicapped_range[0][1] <= centroids[i][1] <= handicapped_range[1][1]):
            handicapped_spaces += 1
        elif(faculty_range[0][0] <= centroids[i][0] <= faculty_range[1][0] and
             faculty_range[0][1] <= centroids[i][1] <= faculty_range[1][1]):
            faculty_spaces += 1
        elif(student_range[0][0] <= centroids[i][0] <= student_range[1][0] and
             student_range[0][1] <= centroids[i][1] <= student_range[1][1]):
            student_spaces += 1
        elif(visitor_range[0][0] <= centroids[i][0] <= visitor_range[1][0] and
             visitor_range[0][1] <= centroids[i][1] <= visitor_range[1][1]):
            visitor_spaces += 1
        else:
            other_objects += 1

    return faculty_spaces, student_spaces, handicapped_spaces, visitor_spaces


# Function takes a list of lists containing four coordinates and returns a list of lists of centroids [[x,y], [x,y]]
def find_centroids(lst):
    # New list for centroids
    centroids = []
    # For each list of coordinates in the list calculate the centroid by addition then division
    for coordinates in lst:
        x1, y1, x2, y2 = coordinates
        centroid_x = (x1 + x2) / 2
        centroid_y = (y1 + y2) / 2
        # Appended to list in [x,y] format
        centroids.append([centroid_x, centroid_y])
    return centroids


# Function that sorts the list of lists containing the centroids
def sort_centroids(lst):
    # Returns a sorted list of centroids by finding the lowest x value then lowest y value
    return sorted(lst, key=lambda x: (x[0], x[1]))


# Function to calculate the distance between centroids using Pythagorean Theorem
def calculate_distance(centroid1, centroid2):
    x1, y1 = centroid1
    x2, y2 = centroid2
    distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    return distance


# Function to alleviate any duplication errors that may have been outp0ut from od algorithm
def remove_close_centroids(centroids):
    updated_centroids = []
    for i, centroid1 in enumerate(centroids):
        is_close = False
        for j, centroid2 in enumerate(centroids[i+1:]):
            # If distance found is less than 100 break so it won't be added to updated list
            if calculate_distance(centroid1, centroid2) < 50:
                is_close = True
                break
        # If not less than 100 then add the centroid to the updated list
        if not is_close:
            updated_centroids.append(centroid1)
    return updated_centroids


# Plot and visualize the centroids
def plot_centroids(bgimg_filename, centroid_coordinates, output_filename):
    # x values are at index 0 in the centroid list
    x_centroid = [coordinate[0] for coordinate in centroid_coordinates]
    # y values are at index 1 in the centroid list
    y_centroid = [coordinate[1] for coordinate in centroid_coordinates]
    img = plt.imread(bgimg_filename)
    fig, ax = plt.subplots()
    img = ax.imshow(img)
    plt.scatter(x_centroid, y_centroid)
    plt.savefig(output_filename)
    print(f"\t\tSaved plotted results to {output_filename}.")


# Convert the bounding boxes into centroids and sort then by x then y.
def organize_bboxes(bboxes):
    # Read the list of lists from file
    with open(bboxes, 'r') as f:
        contents = f.read().splitlines()
        lst = []
        # Remove "[" and "]" characters from line
        for line in contents:
            line = line.replace("[", "").replace("]", "")
            try:
                coordinates = list(map(int, line.split()))
                if len(coordinates) != 4:
                    raise ValueError
                lst.append(coordinates)
            except ValueError:
                print("Invalid coordinate format:", line)

    # Find the centroids from the list of bounding boxes
    centroids = find_centroids(lst)
    # Sort the list of centroids
    sorted_centroids = sort_centroids(centroids)
    # Remove the closest centroids that
    cleaned_centroids = remove_close_centroids(sorted_centroids)

    return cleaned_centroids


# Detect only vehicles in the parking lot using YOLOv7 algorithm
def detect(filename, img, weights, conf_thres, iou_thres):
    # Load the model
    device = select_device() 
    model = attempt_load(weights, map_location=device)
    print(True)
    stride = int(model.stride.max())  # model stride
    imgsz = check_img_size(640, s=stride)  # check img_size

    # Load dataset
    dataset = LoadImages(img, img_size=imgsz, stride=stride)

    for path, img, im0s, vid_cap in dataset:
        img = torch.from_numpy(img).to(device)
        img = img.float()  # uint8 to fp16/32
        img /= 255.0  # 0 - 255 to 0.0 - 1.0
        if img.ndimension() == 3:
            img = img.unsqueeze(0)

        #inference
        t1 = time_synchronized()
        with torch.no_grad():   # Calculating gradients would cause a GPU memory leak
            pred = model(img)[0]
        t2 = time_synchronized()
        # Apply NMS
        pred = non_max_suppression(pred, conf_thres, iou_thres)
        t3 = time_synchronized()

        # Process detections
        for i, det in enumerate(pred): 
            p, s, im0, frame = path, '', im0s, getattr(dataset, 'frame', 0)
            if len(det):
                # Rescale boxes from img_size to im0 size
                det[:, :4] = scale_coords(img.shape[2:], det[:, :4], im0.shape).round()

                li = []
                for *xyxy, conf, cls in reversed(det):
                    if(int(cls) in [2, 3, 7]): # car (2), motorcycle (3), or truck (7)
                        li.append((torch.tensor(xyxy)).numpy())
            
            f = open(filename, "w")
            for a in li:
                f.write(str(a) + "\n")
            f.close()
            print(f"\t\tSaved detection results to {filename}.")
        

if(__name__ == "__main__"):
    main()