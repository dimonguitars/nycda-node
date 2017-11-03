var express = require('express');
var parser = require('body-parser');
var app = express();
//parses requests with the content type of `application/json`
app.use(parser.json());
app.post('/submit', function(request, response) {
 //if a json payload is posted to `/submit`,
 //body-parser's json parser will parse it and
 //attach it as `request.body`.
 console.log(request.body);
 response.send('request receieved.');
});

var server = app.listen(3030, function(){
  console.log('Open http://localhost:3030 in the browser');
});
