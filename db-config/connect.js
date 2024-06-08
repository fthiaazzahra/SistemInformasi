const Sequelize = require('sequelize');

// database connection
const connection = new Sequelize(
  '',
  'root',
  '',
  {
    host: 'localhost',
    port: 5500,
    dialect: '',
  },
);

module.exports.connect = connection;
