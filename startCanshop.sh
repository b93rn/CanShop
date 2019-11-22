#!/bin/bash
echo "
Created by: 
    _    _      ____                   
   / \  (_)_ __| __ )  ___  _ __ _ __  
  / _ \ | | '__|  _ \ / _ \| '__| '_ \ 
 / ___ \| | |  | |_) | (_) | |  | | | |
/_/   \_\_|_|  |____/ \___/|_|  |_| |_| 
"
cd ~/Documents/CanShop 

docker-compose up &&
echo "Waiting untill services are started..." &&
sleep 10 &&
echo "Starting browser..."
DISPLAY=:0 chromium-browser http://localhost:8080

exit 0
