var express = require('express');
var app = express();

//set the view engine to hbs for handlebars, ejs for ejs, or pug for pug
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index',{
     groceries:[
       'bananas',
       'milk',
       'lettuce',
       'cheese',
       'eggs'
     ]
  });
});

app.get('/contact', function(req, res){
  res.render('contact',{
     contact:[
       'email@email.com',
       '+1 (234) 567-8900',
       '@twittername',
       '@instaname'
     ]
  });
});

app.get('*', function(req, res) {
  res.status(404).send('<h1>uh oh! page not found!</h1>');
});

var server = app.listen(3030, function(){
  console.log('Open http://localhost:3030 in the browser');
});
