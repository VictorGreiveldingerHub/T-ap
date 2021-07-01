const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../dbConnection');

class Result extends Model {

};

Result.init({
    game_title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date: DataTypes.DATE,
    point: DataTypes.INTEGER,
    game_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: dbConnection,
    createdAt: "created_at",
    updatedAt: "updated_at",
    tableName: "result"
});

module.exports = Result; 