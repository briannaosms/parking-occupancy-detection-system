import matplotlib.pyplot as plt

# Define the file name
filename = 'output.txt'

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
        y1, x1, y2, x2 = coordinates
        centroid_x = (x1 + x2) / 2
        centroid_y = (y1 + y2) / 2
        # Appended to list in [x,y] format
        centroids.append([centroid_x, centroid_y])
    return centroids

# Function that sorts the list of lists containing the centroids
def sort_centroids(lst):
    # Returns a sorted list of centroids by finding the lowest x value then lowest y value
    return sorted(lst, key=lambda x: (x[0], x[1]))

# Plot and visualize the centroids
def plot_centroids(centroid_coordinates):
    # x values are at index 0 in the centroid list
    x_centroid = [coordinate[0] for coordinate in centroid_coordinates]
    # y values are at index 1 in the centroid list
    y_centroid = [coordinate[1] for coordinate in centroid_coordinates]
    plt.scatter(x_centroid, y_centroid)
    plt.show()

# Main
# List definition
lst = [[2, 0, 4, 3], [1, 1, 2, 2], [4, 2, 5, 2], [2, 2, 3, 3], [3, 2, 4, 4], [4, 3, 5, 5], [3, 1, 4, 2]]
# Find the centroids from the list of bounding boxes
centroids = find_centroids(lst)
# Sort the list of centroids
sorted_centroids = sort_centroids(centroids)
# Compare results from finding centroids and sorting
print("Original list of coordinates")
print(lst)
print("List of calculated centroids")
print(centroids)
print("List of sorted centroids")
print(sorted_centroids)
# Plot the list of centroids
plot_centroids(centroids)