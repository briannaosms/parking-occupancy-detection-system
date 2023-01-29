from keras.utils import load_img
from keras.utils import img_to_array
from mrcnn.config import Config
from mrcnn.model import MaskRCNN
from matplotlib import pyplot
from matplotlib.patches import Rectangle

# Draw each box detected in the image
def draw_image_with_boxes(filename, boxes_list):
    # Load the image
    data = pyplot.imread(filename)
    # Plot the image
    pyplot.imshow(data)
    # Get the context for drawing boxes
    ax = pyplot.gca()
    # Plot each box
    for box in boxes_list:
        # Get coordinates
        y1, x1, y2, x2 = box
        # Calculate width and height of the box
        width, height = (x2 - x1), (y2 - y1)
        # Create the shape
        rect = Rectangle((x1, y1), width, height, fill=False, color="red")
        # Draw the box
        ax.add_patch(rect)

    # Show the plot
    # pyplot.show()
    pyplot.savefig("output.png")

# Define the test configuration
class TestConfig(Config):
    NAME = "test"
    GPU_COUNT = 1
    IMAGES_PER_GPU = 1
    NUM_CLASSES = 1 + 80

def main():
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

    # Visualize the results
    draw_image_with_boxes(img_filename, results[0]["rois"])

if(__name__ == "__main__"):
    main()