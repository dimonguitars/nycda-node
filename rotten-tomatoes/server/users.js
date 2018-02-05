const db = require('../db') //this is required
const User = require('../db/models/user');
const Comment = require('../db/models/comment');

const router = require('express').Router()

router.get('/', function(req, res, next) {
    User.findAll({
            include: [Comment]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.post('/create/user', function(req, res, next) {
  console.log(req.body);
    User.sync().then(function(){
      User.create({
        first_name: req.body.user.firstName,
        last_name: req.body.user.lastName,
        email: req.body.user.email,
        password: '12345'
      }).then(result => {
          res.status(200).send(result);
      })
      .catch(next);
    });
});

router.get('/:email', function(req, res, next) {
  console.log(req.params.email);
    User.findOne({
            where:{ email:req.params.email },
            include: [Comment]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});


module.exports = router
