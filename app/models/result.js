const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../dbConnection');

class Result extends Model {
    getInformations() {
        return `Jeu : ${this.game_title}. Nombre de points : ${this.point} le ${this.date}`;
    }
};

Result.init({
    game_title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date: DataTypes.DATE,
    point: DataTypes.INTEGER,
    game_id: { // je n'ai pas besoin de définir les FK, Associations !
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: { // je n'ai pas besoin de définir les FK, Associations !
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