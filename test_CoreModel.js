require('dotenv').config();

// const CoreModel = require('./app/models/coreModel');

// const michel = new CoreModel({});
// michel.firstname = "Michel";

// console.log(michel);

// CoreModel.printStaticThis();

// // Test findAll CoreModel
// // Pour Theme
// const Result = require('./app/models/result');
// Result.findAll((err, results) => {
//     if (err) { return console.log(err); };
//     console.log(results);
// });
// // Pour Difficulty
// const Difficulty = require('./app/models/difficulty');
// Difficulty.findAll((err, difficulties) => {
//     if (err) { return console.log(err); };
//     console.log(difficulties);
// });

// // test findById CoreModel
// // Pour result
// const Result = require('./app/models/result');
// Result.findById(3, (err, result) => {
//     if (err) { return console.log(err); };
//     console.log(result);
//     console.log(result.constructor);
// }); 

// const User = require('./app/models/user');
// User.findById(8, (err, user) => {
//     if (err) { return console.log(err); };
//     user.delete();
// });

// const Difficulty = require('./app/models/difficulty');
// const newDifficulty = new Difficulty({ title: "Extrême", color: "#123445", coefficient: 8});
// newDifficulty.insert((err, newDifficulty) => {
//     if (err) {return console.log(err); };
//     console.log(newDifficulty);
// });

// const Theme = require('./app/models/theme');
// Theme.findById(7, (err, theme) => {
//     if (err) {return console.log(err); };
//     theme.delete();
// });

// // test update
// User.findById(4, (err, user) => {
//     if (err) {return console.log(err); };
//     user.firstname = "CoreModel";
//     user.lastname = "Finito-Pipo";
//     user.update((err2, user2) => {
//         if (err2) {return console.log(err2); };
//         console.log(user2);
//     });
// });

// // Dernier petits tests

// const User = require('./app/models/user');
// User.findAll(console.log);

// const Game = require('./app/models/game');
// Game.findById(2, (console.log));

const Difficulty = require('./app/models/difficulty');
// const extremeDifficulty = new Difficulty({
//     title: 'Extreme',
//     color: '#100000',
//     coefficient: 10
// });
// extremeDifficulty.insert(console.log);

// Suppression des difficulties ajoutées
// Difficulty.findById(5, (err, diff) => {
//     if (err) { return console.log(err); };
//     diff.delete(console.log);
// });

// Difficulty.findById(6, (err, diff) => {
//     if (err) { return console.log(err); };
//     diff.delete(console.log);
// });

// test méthode findBy
Difficulty.findBy({}, console.log);