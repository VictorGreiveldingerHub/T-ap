const dbConnection = require('../dbConnection');
const { Model, DataTypes } = require('sequelize');

class User extends Model {

    getFullName() {
        return this.firstname + " " + this.lastname;
    };
};

User.init({
    firstname: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    lastname: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    role: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'user'
    },
    avatar: DataTypes.TEXT
}, {
    sequelize: dbConnection,
    createdAt: "created_at",
    updatedAt: "updated_at",
    tableName: "user"
});

// On export la classe !
module.exports = User; 