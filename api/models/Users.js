const Sequelize = require('sequelize');

const sequelize = require('../lib/db.js').connect();

module.exports = sequelize.define('user', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    username: Sequelize.TEXT,
    password: Sequelize.TEXT,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
});