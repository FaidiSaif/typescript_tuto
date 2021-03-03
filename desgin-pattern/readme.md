# APP overview

application That :
1- generates a user randomly
2- generates a company randomly
3- display there locations in Google Maps

# developement tools

we are going to use the tool parcel-bundler
it helps to run typescript in the browser
\*Install : npm install -g parcel-bundler

# How parcel-bundler works

1- we feed to parcel bundler an html file
2- it looks for all .ts files
3- it compiles it to .js and replace the new .js code in html
4- it runs it in the browser

## what package ?

use the faker node module to generate fake data for us
npm install -S faker
npm install -S @types/faker
npm install -S @types/googlemaps
