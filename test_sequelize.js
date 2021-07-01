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

const User = require('./app/models/user');
User.findByPk(1).then((user) => {
    if (user) {
        return console.log(user.getFullName());
    };
}).catch((err) => {
    console.log(err);
});