# cronjob script for PODS
cd image-retrieval/ && ./capture.sh
sleep 10
cd object-detection/src && ./app.sh