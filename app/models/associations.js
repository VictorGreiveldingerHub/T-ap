const User = require('./user');
const Result = require('./result');
const Theme = require('./theme');
const Difficulty = require('./difficulty');
const Game = require('./game');

// Associations: une fois le modèle défini (init), je peux définir des liens

// User <=> Result, ("un user possède un ou plusieurs résultats")
User.hasMany(Result, {
    foreignKey: "user_id",
    as: "userResults"
});

// réciproque : un résultat appartient à 1 user
Result.belongsTo(User, {
    foreignKey: "user_id",
    as: "results"
});

// game <-> result, ("un jeu possède un ou plusieurs résultats")
Game.hasMany(Result, {
    foreignKey: "game_id",
    as: "gameResult"
});

// réciproque : un résultat appartient à 1 game
Result.belongsTo(Game, {
    foreignKey: "game_id",
    as: "gameResults"
});

// game <-> theme ("N game possèdent le theme X, et le game Y porte N theme")
// Un game possèdent plusieurs theme
Game.belongsToMany(Theme, {
    through: "game_has_theme",
    foreignKey: "game_id",
    otherKey: "theme_id",
    timestamps: false,
    
    as: "gameTheme"
});

// Un theme appartient à plusieurs game
Theme.belongsToMany(Game, {
    through: "game_has_theme",
    foreignKey: "theme_id",
    otherKey: "game_id",
    timestamps: false,
    
    as: "themes"
});

// game <-> difficulty
// un jeu possède plusieurs difficulty
Game.belongsToMany(Difficulty, {
    through: "game_has_difficulty",
    foreignKey: "game_id",
    otherKey: "difficulty_id",
    timestamps: false,
    
    as: "gameDifficulties"
});

// une difficulté appartient à plusieurs jeux
Difficulty.belongsToMany(Game, {
    through: "game_has_difficulty",
    foreignKey: "difficulty_id",
    otherKey: "game_id",
    timestamps: false,
    
    as: "difficulties"
})

module.exports = {User, Result, Theme, Difficulty, Game};