require('dotenv').config();

const Theme = require('./app/models/theme');

Theme.findAll().then((results) => {
    console.log(results);
}).catch((err) => {
    console.log(err);
});