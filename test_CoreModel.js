require('dotenv').config();

// const CoreModel = require('./app/models/coreModel');

// const michel = new CoreModel({});
// michel.firstname = "Michel";

// console.log(michel);

// CoreModel.printStaticThis();

// Test findAll CoreModel
// Pour Theme
const Theme = require('./app/models/theme');
Theme.findAll((err, themes) => {
    if (err) { return console.log(err); };
    console.log(themes);
});
// Pour User
const User = require('./app/models/user');
User.findAll((err, users) => {
    if (err) { return console.log(err); };
    console.log(users);
});