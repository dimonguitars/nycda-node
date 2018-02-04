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

router.get('/:id', function(req, res, next) {
    Comment.findOne({
            where:{id:req.params.id},
            include: [User]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

module.exports = router;
