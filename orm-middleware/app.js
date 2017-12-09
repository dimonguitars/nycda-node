var express = require('express');
var app = express();
var orm = require('./orm-lite');
var tableColumns = {
  firstname: 'STRING',
  lastname: 'STRING'
}
var Users = new orm('users', 'postgres://root:root@localhost/orm', tableColumns);

// to support URL-encoded bodies
app.use(express.urlencoded());
app.set('view engine', 'pug');
app.use(express.static('./public'));

app.get('/', function(req, res){
  Users.getAll(function(data){
    res.render('index',{
      data: data,
      title: 'Here are all the users:'
    });
  });
});

app.get('/form', function(req, res){
  res.render('form',{
     title: 'Add a user:'
  });
});

app.post('/add', function(req, res){
  Users.insertIntoTable({
    firstname: req.body.firstname,
    lastname: req.body.lastname
  }, function(){
    res.redirect('/');
  });
})

app.get('/user/*', function(req, res){
  var requestSegments = req.path.split('/');
  console.log(requestSegments[requestSegments.length - 1]);
  Users.findById(requestSegments[requestSegments.length - 1], function(data){
    console.log(data);
    res.render('user',{
       data: data[0]
    });
  });
});

app.get('*', function(req, res) {
  res.status(404).send('<h1>uh oh! page not found!</h1>');
});

var server = app.listen(3330, function(){
  console.log('Open http://localhost:3330 in the browser');
});
