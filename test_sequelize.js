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

const { User, Result } = require('./app/models/associations');

Result.findAll({
    where: {
        user_id: 2
    }
}).then((user) => {
    console.log(user);
}).catch(console.log);