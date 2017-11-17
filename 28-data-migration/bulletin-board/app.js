var express = require('express');
var app = express();
var query = require('./query');
// create your table
// create table messages (
//  id serial primary key,
//  title text,
//  message_text text
// );
// make one test entry
// insert into messages (title, message_text) values ('This is my test post 2', 'This is my test content of my test post 2.');

var all_messages = [];
query('select * from messages', [], function(err, results){
 //handle the error and results as appropriate.
 if(err){
  console.log(err);
  return done(client);
 }
 all_messages = results.rows;
});

app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.render('index',{
     messages: all_messages,
     title: 'Here are all the messages:'
  });
});

app.get('/form', function(req, res){
  res.render('form',{
     title: 'Add a message:'
  });
});

app.post('/add-message', function(req, res){
  console.log(req.body.title);
  res.render('index',{
     messages: all_messages,
     title: 'You are in! Here are all the messages:'
  });
});

app.get('*', function(req, res) {
  res.status(404).send('<h1>uh oh! page not found!</h1>');
});

var server = app.listen(3333, function(){
  console.log('Open http://localhost:3333 in the browser');
});
