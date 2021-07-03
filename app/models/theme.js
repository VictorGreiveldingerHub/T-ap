const dbConnection = require('../dbConnection');
const Sequelize = require('sequelize');

class Theme extends Sequelize.Model {

    getName() {
        return "Thème : " + this.title;
    };
};

// Avec Sequelize je dois définir les propriétés en appelant la méthode static "init"
Theme.init({
    title: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    color: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: '#000'
    }
}, {
    sequelize: dbConnection,
    createdAt: "created_at",
    updatedAt: "updated_at",
    tableName: "theme"
});

module.exports = Theme; 