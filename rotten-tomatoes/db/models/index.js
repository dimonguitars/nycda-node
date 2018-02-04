'use strict';

const User = require('./user')
const Comment = require('./comment');

User.hasMany(Comment);
// Set foreign key (userId) to the comments table
Comment.belongsTo(User);

module.exports = {User, Comment};
