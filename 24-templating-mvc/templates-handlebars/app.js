var express = require('express');
var hbs = require('hbs');
var fs = require('fs');
var app = express();

//include the header partial
hbs.registerPartial('header', fs.readFileSync('./views/includes/header.hbs', 'utf-8'));

//include the footer partial
hbs.registerPartial('footer', fs.readFileSync('./views/includes/footer.hbs', 'utf-8'));

//set the view engine to hbs for handlebars, ejs for ejs, or pug for pug
app.set('view engine', 'hbs');

app.get('/', function(req, res){
  res.render('list',{
     groceries:[
       'bananas',
       'milk',
       'lettuce',
       'cheese',
       'eggs'
     ],
     title: 'Handlebars Are Helpful!'
  });
});

app.get('*', function(req, res) {
  res.status(404).send('<h1>uh oh! page not found!</h1>');
});

var server = app.listen(3332, function(){
  console.log('Open http://localhost:3332 in the browser');
});
