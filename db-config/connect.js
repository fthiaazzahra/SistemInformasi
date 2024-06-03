const Sequelize = require('sequelize');

// database connection
const connection = new Sequelize(
  '',
  'root',
  '',
  {
    host: 'localhost',
    port: ,
    dialect: '',
  },
);

module.exports.connect = connection;
