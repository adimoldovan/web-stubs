#!/bin/sh

serverpath=/var/www/html
#mkdir $serverpath
rsync -av --progress ./ $serverpath --exclude '.git' --exclude '.gitignore' --exclude 'install.sh'
cd $serverpath
npm install
rm $serverpath/package*.json