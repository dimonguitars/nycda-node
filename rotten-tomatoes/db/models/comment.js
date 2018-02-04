'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const Comment = db.define('comments', {
  comment_text: {
  	type: Sequelize.TEXT,
  	allowNull: false,
  	defaultValue: null
  },
  movieId: {
  	type: Sequelize.STRING,
  	allowNull: false
  }
})

module.exports = Comment;
