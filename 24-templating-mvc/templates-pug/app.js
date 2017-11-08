var express = require('express');
var app = express();

//set the view engine to hbs for handlebars, ejs for ejs, or pug for pug
app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.render('list',{
     groceries:[
       'bananas',
       'milk',
       'lettuce',
       'cheese',
       'eggs'
     ],
     title: 'Pug Is Helpful!'
  });
});

app.get('*', function(req, res) {
  res.status(404).send('<h1>uh oh! page not found!</h1>');
});

var server = app.listen(3333, function(){
  console.log('Open http://localhost:3333 in the browser');
});
