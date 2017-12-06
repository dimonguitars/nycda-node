var express = require('express');
var app = express();
var path = require('path');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://root:root@localhost/uploads');
var sharp = require('sharp');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/images/userimages', express.static(__dirname + '/public/images/userimages'));

// need cookieParser middleware before we can do anything with cookies
var cookieParser = require('cookie-parser');
app.use(cookieParser());

// let static middleware do its job
app.use(express.static(__dirname + '/public'));

// Database schema for this exercise
// create database uploads;
var Users = sequelize.define('users', {
 username: Sequelize.STRING,
 image_path: Sequelize.STRING
});

var multer = require('multer');
// // store on the server disk space
// var myDiskStorage = multer.diskStorage(/* options */);
// // or store in the memory of the server
// var myMemStorage = multer.memoryStorage();

// diskStorage specifies we're saving the files to disk
var myStorage = multer.diskStorage({
 destination: function (req, file, cb) {
   // the directory of where to save the files
   cb(null, './public/images/userimages')
 },
 filename: function (req, file, cb) {
   // For each request what do we call the file.
   // file.mimetype.split('/')[1] captures the extension (eg png or jpg).
   // console.log(file);
   cb(null, file.fieldname + '-' +file.originalname + '-' + Date.now() + '.' + file.mimetype.split('/')[1])
 }
});

// // set a cookie in general
// app.use(function (req, res, next) {
//   // check if client sent cookie
//   // console.log(req.cookies);
//   var cookie = req.cookies;
//   if(cookie){
//     if (cookie.userId === undefined)
//     {
//       // no: set a new cookie
//       var uId = 1;
//       res.cookie('userId', uId, { maxAge: 900000, httpOnly: true });
//       console.log('cookie userId created successfully');
//     }
//     else
//     {
//       // yes, cookie was already present
//       console.log('cookie exists', cookie);
//     }
//
//     if (cookie.userName === undefined)
//     {
//       // no: set a new cookie
//       var name = 'Foo';
//       res.cookie('userName', name, { maxAge: 900000, httpOnly: true });
//       console.log('cookie userName created successfully');
//     }
//     else
//     {
//       // yes, cookie was already present
//       console.log('cookie exists', cookie);
//     }
//   }
//
//   next(); // <-- important!
// });

var requestHandler = multer({ storage: myStorage })
app.post('/create', requestHandler.single('newFile'),
 function(req, res, next) {
   // add the username submitted via the form to a cookie on form submission
   // var cookie = req.cookies;
   // if(cookie){
   //   if (cookie.userName === undefined)
   //   {
   //     // no: set a new cookie
   //     res.cookie('userName', req.body.userName, { maxAge: 900000, httpOnly: true });
   //     console.log('cookie userName created successfully');
   //   }
   //   else
   //   {
   //     // yes, cookie was already present
   //     console.log('cookie exists', cookie);
   //   }
   // }
   sharp(req.file.path)
      .resize(400, 400)
      .toFile(req.file.destination + '/400x400-' + req.file.filename, function (err) {
        if(err){
          console.log(err);
          return;
        }
        else{
          Users.sync().then(function(){
            Users.create({
              username: req.body.userName,
              image_path: req.file.destination + '/400x400-' + req.file.filename
            });
            return res.redirect('/');
          });
        }
      });
 }
);

app.get('/', function(req, res){
  Users.sync().then(function(){
    Users.findAll({
      order: [['createdAt', 'DESC']]
    }).then(function(rows) {
      var all_users = [];
      for(var i = 0; i < rows.length; i++) {
        all_users.push(rows[i].dataValues);
      }
      // console.log(req.cookies);
      res.render('index',{
         title: 'Uploading files huh?',
         users: all_users
      });
    });
  });
});

app.get('/user/*', function(req, res){
  Users.sync().then(function(){
    Users.findOne({
      where: {
        id: req.path.split('/')[2]
      }
    }).then(function(row) {
      res.render('user',{
         user: row.dataValues
      });
    });
  });
});

app.get('/form', function(req, res){
  res.render('form',{
     title: 'Add a file:'
  });
});

app.get('*', function(req, res) {
  res.status(404).send('<h1>uh oh! page not found!</h1>');
});

var server = app.listen(3333, function(){
  console.log('Open http://localhost:3333 in the browser');
});
