// // using the node's core http library
// var http = require('http');
// var myServer = http.createServer(function(req, res){
//   res.writeHead(200, {"Content-Type": "text/html"});
//   res.write('<h1>Hello World! Yep yep!</h1>');
//   res.end();
// });
//
// myServer.listen(3000);
// console.log('Open http://localhost:3000 in the browser');

var express = require('express');
var app = express();

//middleware handlers look very similar to route handlers
app.use('/list', function(req, res, next){
 //if we wanted to forbid query string usage,
 //that could be done in middleware.
 if(Object.keys(req.query).length > 0) {
   res.status(400).send("You can't use query strings!");
 }
 else {
   next();
 }
});

app.get('/', function(req, res){
  console.log(req.query);
  res.send('<h1>Hello Express! Niiiice!</h1>');
});

app.get('/blah', function(req, res){
  res.send('<h1>Ooo! Blah!</h1>');
});

app.get('/y*', function(req, res){
  res.send('<h1>Here is the whild card and you will see this everytime you go to something starting with "y"</h1>');
});

app.get('/list', function(req, res){
  res.send('<h1>Here will be something more useful soon!</h1>');
});

app.get('/list/woop', function(req, res){
  res.send(`<h1>Woop woop!</h1>`);
});

app.get('/list/:name', function(req, res){
  res.send(`<h1>Hello ${req.params.name}!</h1>`);
});

// example of reading json and outputting the data
var friendsData = require('./friends.json');
app.get('/friends', function(req, res){
  var friends = '';
  friendsData.forEach(function(current){
    friends += `
      <li>${current.name}</li>
    `
  });
  res.send(`${friends}`);
});

app.get(['/one', '/two', '/three'], function(req, res){
  res.send(`<h1>That's the same route!</h1>`);
});

app.get('*', function(req, res) {
 res.status(404).send('<h1>uh oh! page not found!</h1>');
});

var server = app.listen(3000, function(){
  console.log('Open http://localhost:3000 in the browser');
});
