#!/bin/bash
echo "
Created by: 
    _    _      ____                   
   / \  (_)_ __| __ )  ___  _ __ _ __  
  / _ \ | | '__|  _ \ / _ \| '__| '_ \ 
 / ___ \| | |  | |_) | (_) | |  | | | |
/_/   \_\_|_|  |____/ \___/|_|  |_| |_| 
"
cd ~/Documents/CanShop | docker-compose up

DISPLAY=:0 chromium-browser localhost:8080

done