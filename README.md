# Parking Occupancy Detection System (PODS)

## Object Detection
### About
`/pods/object-detection` contains the directories `/docker` and `/Mask-RCNN-TF2`.
- `/docker` contains a docker file that automates the testing enviroment
- `/Mask-RCNN-TF2` contains the MRCNN object detection repository

### Setup
**A NVIDIA GPU is required to use the object detection algorithm.**
To use the object detection algorithm, do the following:
1. Navigate the the directory containing the dockerfile: `pods/object-detection/docker/`.
2. Run the command `docker build -t pods .`
3. Run the command `docker run --gpus=all --rm pods python object-detect.py`
4. Open another terminal and run the command `docker ps`. This will show the running containers. 
5. The object detection script has saved its results to `output.jpg` in the `Mask-RCNN-TF2/` directory. Run the command `docker cp <container-id>:pods/object-detection/Mask-RCNN-TF2/output.jpg src-path/`. Replace `<container-id>` with the first 4 characters in the container ID (from the last step). Replace `src-path/` with your specified save path for the results. For example, if the container id is `cf62`, then the command will be `docker cp cf62:pods/object-detection/Mask-RCNN-TF2/output.jpg ~/Documents/`.

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
