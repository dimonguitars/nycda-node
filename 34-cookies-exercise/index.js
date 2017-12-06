var express = require('express');
var app = express();
var path = require('path');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
var cookieParser = require('cookie-parser');
app.use(cookieParser());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
  console.log(req.cookies);
  res.render('index',{
     title: 'Here Come The Cookies!',
     cookies: req.cookies
  });
});

app.get('/form', function(req, res){
  res.render('form',{
     title: 'Add Some Cookies:'
  });
});

app.post('/add',
 function(req, res, next) {
   // add the cookie cookieName to the cookies
   console.log(req.body);
   if(!('cookieName' in req.cookies)){
       // no: set a new cookie
       res.cookie('cookieName', req.body.cookName, { maxAge: 900000, httpOnly: true });
       console.log('cookie cookieName created successfully');
   }
   else{
     // yes, cookie was already present
     console.log('cookie cookieName exists', cookie);
   }
   return res.redirect('/');
 });

app.get('*', function(req, res) {
  res.status(404).send('<h1>uh oh! page not found!</h1>');
});

var server = app.listen(3333, function(){
  console.log('Open http://localhost:3333 in the browser');
});
