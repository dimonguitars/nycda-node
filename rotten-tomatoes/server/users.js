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

router.get('/:id', function(req, res, next) {
    User.findOne({
            where:{id:req.params.id},
            include: [Comment]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

module.exports = router
