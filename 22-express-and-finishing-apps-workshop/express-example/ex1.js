var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('<h1>Welcome to Ex1!</h1>');
});

app.get('/hello', function(req, res){
  // if the query has no first and last keys, we just say 'heya'
  if(!(req.query.first && req.query.last)){
    res.send('<h1>Heya!</h1>');
  }
  else{
    // if it does have these keys, we greet the user
    res.send(`<h1>Hi ${req.query.first} ${req.query.last}!</h1>`);
  }
});

app.get(['/apple', '/ale'], function(req, res){
  res.send('<h1>Apple or Ale!</h1>');
});

app.get('/who+a', function(req, res){
  res.send('<h1>I know right!</h1>');
});

app.get('/:first&:last', function(req, res){
  res.send(`<h1>Hi ${req.params.first} ${req.params.last}!</h1>`);
});

app.get('/:word', function(req, res){
  var reversed = reverse(req.params.word);
  res.send(`<h1>${reversed}</h1>`);
});

function reverse(s){
    return s.split('').reverse().join('');
}

var server = app.listen(3333, function(){
  console.log('Open http://localhost:3333 in the browser');
});
