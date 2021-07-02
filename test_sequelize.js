require('dotenv').config();

// const Theme = require('./app/models/theme');

// Theme.findAll().then((results) => {
//     // console.log(results);
//     for (let theme of results) {
//         console.log(theme.title);
//     };
// }).catch((err) => {
//     console.log(err);
// });

// const User = require('./app/models/user');
// User.findByPk(1).then((user) => {
//     if (user) {
//         return console.log(user.getFullName());
//     };
// }).catch((err) => {
//     console.log(err);
// });


// const Result = require('./app/models/result');
// Result.findAll().then((results) => {
//     for (let result of results) {
//         console.log(result.game_title);
//     }
// }).catch((err) => {
//     console.log(err);
// });

// Result.findAll({
//     where: {
//         game_id: 1
//     }
// }).then((results) => {
//     for (let result of results) {
//         console.log(result.point);
//     }
// }).catch((err) => {
//     console.log(err);
// });

const { User, Result, Game } = require('./app/models/associations');

// User.findAll({
//     where: {
//         id: 2
//     },
//     include: [
//         "ownResults"
//     ]
// }).then((user) => {
//     console.log(user);
// }).catch(console.log);

// Game.findByPk(1, {
//     include: [
//         "gameTheme",
//         "ownGameResult"
//     ]
// }).then((game) => {
//     console.log(game);
// }).catch(console.log);

// Je veux récupérer les thèmes associés au jeu dont l'id est 2
Game.findByPk(2, {
    include: [
        "gameTheme"
    ]
}).then((game) => {
    console.log(game.gameTheme);
}).catch(console.error);