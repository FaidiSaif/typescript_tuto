## automate compilation of TS source files 

in this project we will not use parcel but we gonna use node directly 
#1- create a build directly for generated files
#2- create a src directory for sources files 
#3- run tsc --init to generate a tsconfig.json file to customize the compiler 
##3-1 set rootDir to src
##3-1 set outDir  to build 
#now running "tsc" will compile all the files from  the rootDir and ut them  in the outDir  
#running "tsc -w": watch flag allows to automatically recompile all the code in case we make some changes 

## Concureent compilation and execution 
#generate a config.json file with : npm --init -y
#install 2 command line tools : npm install nodemon concurrently : 
- nodemon will be responsible for running the code automatically 
- concurrently will be responsible for running many scripts at the same time 
- to do so add the following lines in the package.json file under the scripts section : 
    "start:build" : "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
==> test the configuration : npm start 