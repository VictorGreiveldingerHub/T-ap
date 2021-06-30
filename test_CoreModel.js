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

const User = require('./app/models/user');
User.findById(8, (err, user) => {
    if (err) { return console.log(err); };
    user.delete();
});