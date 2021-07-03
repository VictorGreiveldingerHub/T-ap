// Version Sequelize
const Sequelize = require('sequelize');

// Instance de la connexion (vu depuis la doc officielle)
const dbConnection = new Sequelize(process.env.PG_URL);

// et on export
module.exports = dbConnection;