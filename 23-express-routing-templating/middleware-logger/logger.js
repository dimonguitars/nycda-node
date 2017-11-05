var express = require('express');
var app = express();

var fs = require('fs');

//middleware to handle the history log
app.use(function(req, res, next){
  // write the requests's original url to a file
  fs.appendFile('log.txt', `${req.originalUrl}\n`, function (err) {
      if (err) throw err;
      console.log('Saved!');
      next();
  });
});

app.get('/', function(req, res){
  console.log(req.originalUrl);
  res.send('<h1>Hello Express! Niiiice!</h1>');
});

app.get('*', function(req, res) {
  console.log(req.originalUrl);
  res.status(404).send('<h1>uh oh! page not found!</h1>');
});

var server = app.listen(3030, function(){
  console.log('Open http://localhost:3030 in the browser');
});
