#!/bin/bash
img=web-stubs
container=web-stubs

docker build -t $img -f Dockerfile  .

echo Delete old container...
docker rm -f $container

echo Run new container...
docker run -d -p 4999:80 --name $container $img