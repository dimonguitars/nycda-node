var express = require('express');
var parser = require('body-parser');
var app = express();
//parses requests with the content type of `application/json`
// create a middleware that handles json parsing for us
app.use(parser.json());

// handle the post request, checking for the 'foo' member in the json payload of the request
app.post('/submit', function(request, response) {
 //if a json payload is posted to `/submit`,
 //body-parser's json parser will parse it and
 //attach it as `request.body`.
 if(request.body.foo){
   console.log(request.body);
   response.set('Content-Type', 'application/json');
   var responseData = {"hi":"there"};
   response.send(responseData);
 }
 else{
   response.status(404).send('\n\nThere is no foo in that json you sent!');
 }
});

// app.get('/test', function(req, res){
//   res.set('Content-Type', 'text/plain');
//   res.send('<h1>Plain text!</h1>');
// });
// app.get('/test', function(req, res){
//   res.set('Content-Type', 'text/html; charset=utf-8');
//   res.send('<h1>Plain text!</h1>');
// });
app.get('/test', function(req, res){
  res.set('Content-Type', 'application/json');
  res.send({"some":"stuff"});
});

// to send some json to your server you can use this command:
// curl -H "Content-Type: application/json" -X POST -d '{"username":"xyz","password":"xyz"}' http://localhost:3030/submit
app.get('/', function(req, res){
  res.send('<h1>Here We Are Parsing Post Requests On /submit Page!</h1>');
});

app.get('*', function(req, res) {
  res.status(404).send('<h1>uh oh! page not found!</h1>');
});

var server = app.listen(3030, function(){
  console.log('Open http://localhost:3030 in the browser');
});
