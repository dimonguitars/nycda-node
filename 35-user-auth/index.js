var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var models = require('./models');

var passport = require('passport');
app.use(passport.initialize());
require('./strategies/passport-local')(passport, models.user);
var userRoutes = require('./routes/users')(passport);

app.use('/user', userRoutes);

//Models
var models = require("./models");
//Sync Database
models.sequelize.sync().then(function() {

    console.log('Nice! Database looks fine')

}).catch(function(err) {

    console.log(err, "Something went wrong with the Database Update!")

});

// app.get('*', function(req, res) {
//   res.status(404).send('<h1>uh oh! page not found!</h1>');
// });

var server = app.listen(3330, function(){
  console.log('Open http://localhost:3330 in the browser');
});
