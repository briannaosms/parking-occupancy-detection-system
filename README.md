# Parking Occupancy Detection System (PODS)

## Object Detection
### About
`/pods/object-detection` contains the directories `/docker` and `/Mask-RCNN-TF2`
- `/docker` contains a docker file that automates the testing enviroment and configuration for the Visual Studio Code Extension Remote Containers
- `/Mask-RCNN-TF2` contains the MRCNN object detection repository and sample code for the project
  - `main.py` is the developing object detection program. Make a copy of this program then add your changes.
  - `demo.py` is the object detection program used for the sprint 2 retrospective presentation. Its purpose was to demonstrate the detected parking spots and missing vehicles.
  - If you need help to understand how the object detection algorithm is used, the programs `main.py`, `demo.py`, and `object-detect.py` can help.

### Prequisites
**To run the object detection program on your computer, you need a NVIDIA graphics card.**

**Prerequisites for host computer or VM that will run docker:**
1. Ensure your Linux distribution is supported here in the [NVIDIA Toolkit installation guide](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html).
2. Run `ubuntu-drivers devices` in a terminal. 
3. Look for the recommended NVIDIA driver and install it. For example, if my recommended driver is nvidia-driver-525, then I will install that driver using the command `sudo apt install nvidia-driver-525`.
4. Install the utilities for the recommended driver using the command `sudo apt install nvidia-utils-525`.
5. Follow the steps of the [Setting up NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html) in the installation guide.


### Setup
**To use the object detection algorithm, do the following:**
1. Navigate the the directory containing the dockerfile: `pods/object-detection/docker/`.
2. Run the command `docker build -t object-detection .`
3. Run the command `docker run --gpus=all -it --rm object-detection`
4. In the docker container, run the command `python <program-name>` in the docker container where `<program-name>` is replaced by a program. A working example is `demo.py`, to run it use the command `python demo.py`.

## Website Login Automation
### About
- Folder contains three files that are responsible for automating the process required to login into the PoE camera system.
  - `chromedriver.exe ` is the standalone driver used by Selenium to launch an instance of Google Chrome and automate web applications.
  - `login_automation.py` houses the script to automate the login process and save an image from the main stream to local drive.
  - `login_credentials.yml` holds the username and password information needed to have access to the camera web software.
- (The 3 files should be kept in the same directory)

### Process
Automation is powered by the following steps:
1. Store the key-value pairs within `login_credentials.yml` into separate variables within `login_automation.py`.
2. Open an instance of Google Chrome using the Selenium Webdriver framework.
3. Search the webpage by element to send the key values to the appropriate field and click the submit button.
4. Search the webpage's html file for main stream video element then copy and store its data to local storage as a .png.

## PodsApp
- Folder contains the skeleton files that are needed to begin development of the application on our local host.
- In order to test, the following should be done.
  - Be sure to pull from main.
  - In terminal navigate into PodsApp directory that contains manage.py
  - Run `python manage.py runserver` to start server
    - If Django error occurs, then make sure to `pip install django`
  - Visit the local host ip address to view the page
