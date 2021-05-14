# node workshop week 1 : setting up routes

npm install  
then  
npm start

to start the server

this week we're building routes!

task 1: finish bringing the campsite routes by bringing in the req.params.campsiteId routes in to your campsiteRouter  
task2 : build similar routes for a new set of endpoints located at /promotions  
task3 : same same for partners

be sure to test your endpoints with postman:  
https://www.postman.com/downloads/

or... just use curl in the command line! like:

curl -i -X GET http://localhost:3000/campsites/2  
curl -i -X POST -H 'Content-Type: text/plain' -d '{"name": "New item", "year": "2009"}' http://localhost:3000/campsites/2  
curl -i -X PUT -H 'Content-Type: text/plain' -d '{"name": "Updated item", "year": "2010"}' http://localhost:3000/campsites/2
