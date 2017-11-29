#!/bin/bash

serverpath=

echo -e "\nPlease select one option:\n"
echo -e "\t 1 - Install on Apache"
echo -e "\t 2 - Install on Tomcat 8"
read opt

if [ $opt = 1 ]
    then
        serverpath=/var/www/html/stubs
elif [ $opt = 2 ]
    then 
        serverpath=/var/lib/tomcat8/webapps
else
    echo "Invalid option selected"
    exit
fi

chmod 755 $serverpath
rm -rf $serverpath
mkdir $serverpath
rsync -av --progress ./ $serverpath --exclude '.git' --exclude '.gitignore' --exclude 'install.sh'
cd $serverpath
npm install
rm $serverpath/package*.json
