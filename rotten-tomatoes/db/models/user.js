'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const User = db.define('users', {
  firstName: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  lastName: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  email: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  password: {
  	type: Sequelize.STRING,
  	allowNull: false
  }

});

module.exports = User;
