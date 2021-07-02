const User = require('./user');
const Result = require('./result');
const Theme = require('./theme');
const Difficulty = require('./difficulty');
const Game = require('./game');

// Associations: une fois le modèle défini (init), je peux définir des liens

// User <=> Result, ("un user possède un ou plusieurs résultats")
User.hasMany(Result, {
    foreignKey: "user_id",
    as: "ownResults"
});

// réciproque : un résultat appartient à 1 user
Result.belongsTo(User, {
    foreignKey: "user_id",
    as: "result"
});

module.exports = {User, Result, Theme, Difficulty, Game};