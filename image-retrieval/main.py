from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from time import sleep
# pip install python-dotenv
from dotenv import load_dotenv
import os

def main():
    # the image saved directory 
    save_dir = "../object-detection/images/"
    image_filename = "image.png"

    # import credentials
    env_dir = "../"
    env_filename = "pods.env"
    env_path = os.path.join(env_dir, env_filename)
    try:
        os.path.exists(env_path)
        load_dotenv(env_path)
        username = os.getenv("CAMERA_USERNAME")
        password = os.getenv("CAMERA_PASSWORD")
        url = os.getenv("CAMERA_IP")
    except Exception as e: 
        print(e)
        print("error getting credentials")
        exit()


    # modify options to keep the browser open after execution
    chrome_options = Options()
    chrome_options.add_experimental_option("detach", True)
    # set the browser to the chrome webdriver
    browser = webdriver.Chrome(options=chrome_options)

    # the iteration time in minutes
    iteration_time = 1

    # main iteration loop
    while(True):
        # login to the camera system
        login(browser, url, username, password)

        # save the image to the save directory
        save_image(browser, image_filename, save_dir)

        # save image
        sleep(iteration_time)

# login to the camera system
def login(browser, url, username, password):
    # get camera ip
    browser.get(url)
    sleep(1.00001)
    # find the username element
    browser.find_element(By.ID, "username").send_keys(username)
    sleep(0.00001)
    # find the password element
    browser.find_element(By.ID, "password").send_keys(password)
    sleep(0.00001)
    # find the submit element and login
    browser.find_element(By.ID, "b_login").click()

# create a new file and write the image to disk using image element
def save_image(browser, filename, save_dir):
    with open(save_dir + filename, mode = "wb") as f:
        image = browser.find_element(By.ID, "h5player")
        f.write(image.screenshot_as_png)
    print(f"Saved [{filename}] to [{save_dir}]")


if(__name__ == "__main__"):
    pass