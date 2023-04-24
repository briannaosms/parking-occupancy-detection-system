# Necessary libraries
import math
import matplotlib.pyplot as plt

# Define the file name
filename = 'output1.txt'

# Read the list of lists from file
with open(filename, 'r') as file:
    # Break at new line
    contents = file.read().splitlines()
    lst = []
    for line in contents:
        # Remove "[" and "]" characters from line
        line = line.replace("[", "").replace("]", "")
        try:
            coordinates = list(map(int, line.split()))
            if len(coordinates) != 4:
                raise ValueError
            lst.append(coordinates)
        except ValueError:
            print("Invalid coordinate format:", line)

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
            if calculate_distance(centroid1, centroid2) < 100:
                is_close = True
                break
        # If not less than 100 then add the centroid to the updated list
        if not is_close:
            updated_centroids.append(centroid1)
    return updated_centroids

# Plot and visualize the centroids
def plot_centroids(centroid_coordinates):
    # x values are at index 0 in the centroid list
    x_centroid = [coordinate[0] for coordinate in centroid_coordinates]
    # y values are at index 1 in the centroid list
    y_centroid = [coordinate[1] for coordinate in centroid_coordinates]
    plt.gca().invert_yaxis()
    plt.scatter(x_centroid, y_centroid)
    plt.show()

# Main
# Find the centroids from the list of bounding boxes
centroids = find_centroids(lst)
# Sort the list of centroids
sorted_centroids = sort_centroids(centroids)
# Remove the closest centroids that
cleaned_centroids = remove_close_centroids(sorted_centroids)
# Compare results from finding centroids and sorting
print("Original list of coordinates")
print(lst)
print("List of calculated centroids")
print(centroids)
print("List of sorted centroids")
print(sorted_centroids)
print("List of sorted centroids after removing closest")
print(cleaned_centroids)
# Number of centroids before removal of closest centroids
print(len(sorted_centroids))
# Number of centroids after removal of closest centroids
print(len(cleaned_centroids))

# FOR BRIDGING THE GAP TESTING
# Number of maximum spaces available in Nethken parking lot for each category
max_spaces_student = 30
max_spaces_faculty = 10
max_spaces_handicapped = 3
max_spaces_visitor = 4
# Number of spaces unavailable in Nethken parking lot determined by od algorithm results
student_spaces = 0
faculty_spaces = 0
handicapped_spaces = 0
visitor_spaces = 0
other_objects = 0
# Defined ranges for detecting student parking spots
lower_student_range = 250
upper_student_range = 1000
# Defined ranges for detecting faculty parking spots
lower_faculty_range = 2000
upper_faculty_range = 2700
# Defined ranges for detecting handicapped parking spots
lower_handicapped_range = 0
upper_handicapped_range = 1
# Defined ranges for detecting visitor parking spots
lower_visitor_range = 0
upper_visitor_range = 150

# For loop to check each centroid in the list
for i in range(len(cleaned_centroids)):
    #print(i)
    # If a centroid exists between the range of (student determined distance range) then update corresponding category variable
    # Currently checks ranges of y values
    if lower_student_range <= cleaned_centroids[i][1] <= upper_student_range:
        student_spaces+=1
        print(f"({cleaned_centroids[i][0]}, {cleaned_centroids[i][1]}) is within the y range of {lower_student_range} to {upper_student_range}")
        print("Updating student spaces by 1")
    elif lower_faculty_range <= cleaned_centroids[i][1] <= upper_faculty_range:
        faculty_spaces+=1
        print(f"({cleaned_centroids[i][0]}, {cleaned_centroids[i][1]}) is within the y range of {lower_faculty_range} to {upper_faculty_range}")
        print("Updating faculty spaces by 1")
    elif lower_handicapped_range <= cleaned_centroids[i][1] <= upper_handicapped_range:
        handicapped_spaces+=1
        print(f"({cleaned_centroids[i][0]}, {cleaned_centroids[i][1]}) is within the y range of {lower_handicapped_range} to {upper_handicapped_range}")
        print("Updating handicapped spaces by 1")  
    elif lower_visitor_range <= cleaned_centroids[i][1] <= upper_visitor_range:
        visitor_spaces+=1
        print(f"({cleaned_centroids[i][0]}, {cleaned_centroids[i][1]}) is within the y range of {lower_visitor_range} to {upper_visitor_range}")
        print("Updating visitor spaces by 1")    
    else:
        other_objects+=1
        print(f"({cleaned_centroids[i][0]}, {cleaned_centroids[i][1]}) is not within the specified ranges")
        print("Updating other objects by 1")

# Updated data being sent to the database
# current_ variables are number of parking spots avaialable after subtracting unavailable from max
current_spaces_student = max_spaces_student - student_spaces
current_spaces_faculty = max_spaces_faculty - faculty_spaces
current_spaces_handicapped = max_spaces_handicapped - handicapped_spaces
current_spaces_visitor = max_spaces_visitor - visitor_spaces

print(f"The amount of student spaces found was {student_spaces}")
print(f"The amount of faculty spaces found was {faculty_spaces}")
print(f"The amount of handicapped spaces found was {handicapped_spaces}")
print(f"The amount of visitor spaces found was {visitor_spaces}")
print(f"The amount of other objects found was {other_objects}")

# Visualize the centroids
plot_centroids(cleaned_centroids)










# Methodology
# For each centroid in centroid_list
    # If a centroid exists between the range of (student determined distance range)
    # Done so by checking for each centroid (if x and y in centroid is within range)
        # Increment spaces_student count by 1
    # If a centroid exists between the range of (faculty determined distance range)
        # Increment spaces_faculty count by 1
    # If a centroid exists between the range of (handicapped determined distance range)
        # Increment spaces_handicapped count by 1
    # If a centroid exists between the range of (visitor determined distance range)
        # Increment spaces_visisor count by 1
    # Else
        # Increment other_object by 1
        # This will help determining if a car was driving through the lot as a picture was captured
        # Or if any other objects have been placed in the lot at the time of capture outside of the distance ranges

# Updated data being sent to the database
# current_spaces_student = max_spaces_student - student_spaces
# current_spaces_faculty = max_spaces_faculty - faculty_spaces
# current_spaces_handicapped = max_spaces_handicapped - handicapped_spaces
# current_spaces_visitor = max_spaces_visitor - visitor_spaces