const Sequelize = require('sequelize');

const DB = {
  host: process.env.DB_HOST,
  name : process.env.DB_NAME,
  username : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  dialect : process.env.DB_DIALECT,
  port : process.env.DB_PORT
};
// console.log(DB);
const sequelize = new Sequelize(DB.name, DB.username, DB.password, {
  host: DB.host,
  dialect: DB.dialect,
  port: DB.port,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

module.exports.connect = () => {
    return sequelize;
};