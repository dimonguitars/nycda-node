var express = require('express');
var app = express();
var query = require('./query');
var path = require('path');

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

function get_all_posts(){
  return new Promise(function(resolve, reject){
    query('select * from posts order by date_posted desc', function(err, results){
     //handle the error and results as appropriate.
     if(err){
      reject(err);
     }
     resolve(results.rows);
    });
  });
}
function get_post(id){
  return new Promise(function(resolve, reject){
    query('select * from posts where id=$1', [id], function(err, results){
     //handle the error and results as appropriate.
     if(err){
      reject(err);
     }
     resolve(results.rows);
    });
  });
}

app.get('/', function(req, res){
  res.render('index',{
     title: 'Hi! I\'m Antonina'
  });
});

app.get('/blog', function(req, res){
  get_all_posts().then(function(all_messages){
    res.render('blog',{
       posts: all_messages,
       title: 'Here are all the posts:'
    });
  });
});

app.get('/posts/*', function(req, res){
  var requestSegments = req.path.split('/');
  get_post(requestSegments[requestSegments.length - 1]).then(function(post){
    res.render('post',{
      title: post[0].title,
      body: post[0].body
    });
  });
});

app.get('/form', function(req, res){
  res.render('form',{
     title: 'Add a Post:'
  });
});

app.get('/add-message', function(req, res){
  query('insert into posts (title, excerpt, body) values ($1, $2, $3)', [req.query.title, req.query.excerpt, req.query.body], function(err, results){
   //handle the error and results as appropriate.
   if(err){
    console.log(err);
    return done(client);
   }
   console.log('Post inserted.')
  });
  return res.redirect('/blog');
});

app.get('*', function(req, res) {
  res.status(404).send('<h1>uh oh! page not found!</h1>');
});

var server = app.listen(3333, function(){
  console.log('Open http://localhost:3333 in the browser');
});
