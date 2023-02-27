import os

import sys



def get_latest_image(path):

    

    for file in os.listdir(path):



        if (file.endswith(".jpg") or file.endswith(".png") or file.endswith("jpeg")):

            try:

                latest_image = (max(path + file, path + latest_image, key=os.path.getctime)).replace(path, "")

            except (UnboundLocalError):

                latest_image = file



    return latest_image





def get_all_images(path):

    images = []



    for file in os.listdir(file):

        if file.is_file() and ( file.ednswith(".jpg") or file.endswith(".png") or file.endswith("jpeg")):

            images.append(file)

    

    return images



print(get_latest_image("/home/garrett/Capstone/object-detection/images/"))