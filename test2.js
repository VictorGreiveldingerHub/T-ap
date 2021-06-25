require('dotenv').config();

const Theme = require('./app/models/theme');

// Récupérer tous les themes
const emptyTheme = new Theme({});
emptyTheme.findAll((err, themes) => {
    // console.log(themes);
    
    const oneTheme = themes[0];
    console.log(oneTheme.getName());
});