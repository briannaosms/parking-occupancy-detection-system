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

## PodsApp
- Folder contains the skeleton files that are needed to begin development of the application on our local host.
- In order to test, the following should be done.
  - Be sure to pull from main.
  - In terminal navigate into PodsApp directory that contains manage.py
  - Run `python manage.py runserver` to start server
    - If Django error occurs, then make sure to `pip install django`
  - Visit the local host ip address to view the page
