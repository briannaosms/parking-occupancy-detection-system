from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from time import sleep
from dotenv import load_dotenv
import os
import sys
import pytz
from datetime import datetime

# main function
def main():
    # argument checking
    if(len(sys.argv) <= 1 or int(sys.argv[1]) < 15):
        print("Correct usage: python main.py <iteration-time-in-secs>")
        # print("Correct usage: ./capture.sh <iteration-time-in-secs>")
        exit()
    else:
        iteration_time = int(sys.argv[1])


    # the image save directory and file name 
    save_dir = "../object-detection/output/"
    image_filename = "nethken.png"
    timer = 1 # in hours
    fmt = "%Y-%m-%d %H:%M:%S"
    tz = pytz.timezone('America/Chicago')


    # import credentials for camera system
    env_dir = "../"
    env_filename = ".env"
    env_path = os.path.join(env_dir, env_filename)
    try:
        os.path.exists(env_path)
        load_dotenv(env_path)
        username = os.getenv("CAMERA_USERNAME")
        password = os.getenv("CAMERA_PASSWORD")
        url = os.getenv("CAMERA_IP")
    except Exception as e: 
        print("ERROR: Failed to retrieve credentials\n" + e)
        exit()


    # modify options to keep the browser open & maximized
    chrome_options = Options()
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')
    chrome_options.add_argument("start-maximized")
    chrome_options.add_experimental_option("detach", True)
    # set the browser to the chrome webdriver
    browser = webdriver.Chrome(options=chrome_options)


    # login to the camera system
    login(browser, url, username, password)


    # main iteration loop
    loop_start = datetime.now().astimezone(tz)
    elapsed_time = hours = minutes = iterations = 0
    iter_count = 0
    while(hours <= timer):
        print(f"\n[{int(hours)} hr {int(minutes)} m elapsed]: {int(timer-hours)} hr remaining")
        print(f"Iteration {iter_count}")
        
        # save the image to the save directory
        save_image(browser, image_filename, save_dir)

        # print time stats
        loop_current = datetime.now().astimezone(tz)
        elapsed_time = (loop_current - loop_start).seconds
        minutes = round((elapsed_time % 3600) / 60, 2)
        hours = round(minutes / 60, 2)

        # wait for the next iteration
        print("\tWaiting...")
        iter_count += 1
        sleep(iteration_time)


# login to the camera system-- sleeps are necessary for buffer/delay
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
    sleep(5)


# create a new file and write the image to disk using image element
def save_image(browser, filename, save_dir):
    with open(save_dir + filename, mode = "wb") as f:
        image = browser.find_element(By.ID, "h5player")
        f.write(image.screenshot_as_png)
    print(f"\tSaved [{filename}] to [{save_dir}]")


if(__name__ == "__main__"):
    main()