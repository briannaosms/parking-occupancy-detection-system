import os
import sys

# returns the single most recent image based on creation time.
def get_latest_image(path):

    for file in os.listdir(path):
        # check to see if image type 
        if (file.endswith(".jpg") or file.endswith(".png") or file.endswith("jpeg")):
            try:
                # get the file with the highest ctime
                latest_image = (max(path + file, path + latest_image, key=os.path.getctime)).replace(path, "")
            except (UnboundLocalError):
                latest_image = file
    return latest_image

#returns all images in specified path
def get_all_images(path):
    images = []
    for file in os.listdir(file):
        if file.is_file() and ( file.ednswith(".jpg") or file.endswith(".png") or file.endswith("jpeg")):
            images.append(file)
    return images