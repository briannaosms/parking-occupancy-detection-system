"""
Script used to visit a specified url and log in with previously recorded credentials
In the same folder is a ChromeDriver.exe and a login_credentials python file
The ChromeDriver.exe is responsible for executing the compatible version Chrome and Selenium
The login_credentials file contains the username and passcode for login screen of URL
"""
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import yaml
import time
import sys

# With statement to open, read, load, and close the stream containing login credentials
with open('login_credentials.yml', 'r') as f:
    conf = yaml.safe_load(f)

# Linking login credentials from credential file
my_admin_username = conf['camera_admin']['username']
my_admin_password = conf['camera_admin']['password']

# Altering chrome options to allow the browser to stay open after execution
chrome_options = Options()
chrome_options.add_experimental_option("detach",True)
# Setting browser to the path containing the chromedriver
browser = webdriver.Chrome(options=chrome_options)

# Function that accepts credentials and parses through elements to locate ID, send and submit credentials
def login(url, usernameID, username, passwordID, password, submit_buttonID):
   # Print statements are crucial to allow Selenium time to keep up with processes
   browser.get(url)
   time.sleep(1.00001)
   browser.find_element(By.ID, usernameID).send_keys(username)
   time.sleep(0.00001)
   browser.find_element(By.ID, passwordID).send_keys(password)
   time.sleep(0.00001)
   browser.find_element(By.ID, submit_buttonID).click()
   time.sleep(3)
   get_Image()

# Function to find and save the image from the web driver
def get_Image():
    # Pass image URL and save it locally
    with open("image.png", mode = "wb") as g:
        # Find the image element and save its contents
        image = browser.find_element(By.ID, "h5player")
        # Save the data of the image web element locally
        g.write(image.screenshot_as_png)
        return image.screenshot_as_png

# Function call that passes url, element ID names, and element ID values
# First argument is IP address that has to be hardcoded once camera is connectedto network
def main(interval):
      login("http://138.47.102.163/", "username", my_admin_username, "password", my_admin_password, "b_login")

      while(True):
         get_Image()
         time.sleep(interval)

if __name__ == "__main__":
   try:
      print("Time interval set to {} secs".format(sys.argv[1]))
      main(int(sys.argv[1]))
   except IndexError:
      print("No time given, defualting interval to 60 secs")
      main(60)



