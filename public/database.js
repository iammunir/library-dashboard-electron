const Sequelize = require('sequelize');

const sequelize = new Sequelize('visual-programming', 'root', 'admin', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
