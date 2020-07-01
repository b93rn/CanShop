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

sleep 10 && docker-compose pull && docker-compose up -d &&
echo "Waiting untill services are started..." &&
sleep 12 &&
echo "Starting browser..."
chromium-browser --kiosk --app=http://localhost:8080 
#DISPLAY=:0 chromium-browser --app=http://localhost:8080 &&
