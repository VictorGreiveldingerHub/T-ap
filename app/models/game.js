const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../dbConnection');

class Game extends Model {};

Game.init({
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    category: DataTypes.TEXT,
    description: DataTypes.TEXT,
    color: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: '#000'
    },
    rule: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: dbConnection,
    createdAt: "created_at",
    updatedAt: "updated_at",
    tableName: "game"
});

module.exports = Game; 