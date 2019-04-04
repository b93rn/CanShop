let Sequelize = require('sequelize');

module.exports = new Sequelize('canshop', 'postgres', '36xv3', {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432
});