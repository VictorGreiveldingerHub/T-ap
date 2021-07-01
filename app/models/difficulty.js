const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../dbConnection');

class Difficulty extends Model {};

Difficulty.init({
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    color: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    coefficient: {
        type: DataTypes.REAL,
        allowNull: false
    },
}, {
    sequelize: dbConnection,
    createdAt: "created_at",
    updatedAt: "updated_at",
    tableName: "difficulty"
});

module.exports = Difficulty; 