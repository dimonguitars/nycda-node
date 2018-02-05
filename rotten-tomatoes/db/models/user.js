'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const User = db.define('users', {
  first_name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  last_name: {
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
