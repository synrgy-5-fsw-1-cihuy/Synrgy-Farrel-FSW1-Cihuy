const { Sequelize } = require("sequelize");
require("dotenv").config();

// Option 1: Passing a connection URI
const db = new Sequelize(process.env.DB_CONFIG); // Example for postgres

module.exports = db;
