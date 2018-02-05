const db = require('../db') //this is required
const Comment = require('../db/models/comment');
const User = require('../db/models/user');

const router = require('express').Router()

router.get('/', function(req, res, next) {
    Comment.findAll({
            include: [User]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.post('/create/comment', function(req, res, next) {
  console.log(req.body);
    Comment.sync().then(function(){
      Comment.create({
        comment_text: req.body.comment,
        movie_id: req.body.movieId,
        user_id: req.body.userId
      }).then(result => {
          res.status(200).send(result);
      })
      .catch(next);
    });
});

router.get('/:id', function(req, res, next) {
  console.log(req.params.id);
    Comment.findAll({
            where:{ movie_id: req.params.id },
            include: [User]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

module.exports = router;
