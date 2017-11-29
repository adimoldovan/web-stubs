#!/bin/bash

serverpath=
basepath=$(dirname $0)
basedir=$(basename $basepath)

echo -e "\nPlease select one option:\n"
echo -e "\t 1 - Install on Apache"
echo -e "\t 2 - Install on Tomcat 8"
read opt

if [ $opt = 1 ]
    then
        serverpath=/var/www/html
elif [ $opt = 2 ]
    then 
        serverpath=/var/lib/tomcat8/webapps
else
    echo "Invalid option selected"
    exit
fi

echo "Removing $serverpath"
rm -rf $serverpath
mkdir $serverpath

echo "Copying files to $serverpath"
rsync -av --progress $basepath $serverpath --exclude '.git' --exclude '.gitignore' --exclude 'install.sh'
cd $serverpath/$basedir
echo "Intalling"
npm install
echo "Cleaning up"
rm package*.json
