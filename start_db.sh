#!/bin/bash

docker stop mysql-container
docker rm mysql-container



# Start a new Docker container
docker run -d --name mysql-container -p 3306:3306 --env-file ./.env mysql

npm run db:push