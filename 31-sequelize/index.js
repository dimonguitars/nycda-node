var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://root:root@localhost/sequelize');
var express = require('express');
var app = express();

app.set('view engine', 'pug');

//let's take another look at `hats` from the Postgres lecture
//define a `hat` model with the following properties:
var Hat = sequelize.define('hat', {
 //create name and material as strings,
 name: Sequelize.STRING,
 material: Sequelize.STRING,
 //height as an integer,
 height: Sequelize.INTEGER,
 //and brim as a true/false
 brim: Sequelize.BOOLEAN
});

//using the hat definition from the previous example,
Hat.sync().then(function(){
  Hat.create({
    name: 'cowboy',
    material: 'straw',
    height: 4,
    brim: true
  });
  Hat.create({
    name: 'cowgirl',
    material: 'leather',
    height: 3,
    brim: true
  });
  Hat.create({
    name: 'fedora',
    material: 'felt',
    height: 3,
    brim: false
  });
});

// Works like select where PK (id in this case) is equal to something
var id = 9;
Hat.findById(id).then(function (row) {
 var name = row.dataValues.name;
 var brim = row.dataValues.brim;
 // console.log(name);
 // console.log(brim);
});

// find one by id and name and update the data
Hat.findOne({
 where: {
   id: 4,
   name: 'cowboy'
 }
})
.then(function(hat){
 hat.update({
   height: 1
 });
});

// // to drop a created table
// Hat.drop();

app.get('/', function(req, res){
  // Works like select all
  Hat.findAll({
    where: {
      brim: false
    }
  }).then(function(rows) {
     var all_hats = [];
     for(var i = 0; i < rows.length; i++) {
       all_hats.push(rows[i].dataValues);
       // var name = columnData.name;
       // var brim = columnData.brim;
       // // console.log(name);
       // // console.log(brim);
     }
     res.render('index',{
        hats: all_hats,
        title: 'Here are all the hats:'
     });
  });
});
app.get('/search', function(req, res){
  var query = req.query.term;
  // console.log(req.query);
  // Works like select all
  Hat.findAll({
    // // here is the hardcoded search
    // where: {
    //   name: {
    //     ilike: 'cow%'
    //   }
    // }
    // here is the dynamic search
    // will be triggered by url like this http://localhost:3333/search?term=cow
    where: {
      name: {
        ilike: '%' + query + '%'
      }
    }
  }).then(function(rows) {
     var all_hats = [];
     for(var i = 0; i < rows.length; i++) {
       all_hats.push(rows[i].dataValues);
       // var name = columnData.name;
       // var brim = columnData.brim;
       // // console.log(name);
       // // console.log(brim);
     }
     res.render('index',{
        hats: all_hats,
        title: 'Here are all the hats:'
     });
  });
});

app.get('*', function(req, res) {
  res.status(404).send('<h1>uh oh! page not found!</h1>');
});

var server = app.listen(3333, function(){
  console.log('Open http://localhost:3333 in the browser');
});
