require('dotenv').config();

const Theme = require('./app/models/theme');

// // Récupérer tous les themes
// Theme.findAll((err, themes) => {
//     // console.log(themes);
    
//     const oneTheme = themes[0];
//     console.log(oneTheme.getName());
// });

// Récupérer les infos d'un theme avec son id
Theme.findById(1, (err, theme) => {
    console.log(theme.getName());
});