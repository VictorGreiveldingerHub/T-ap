require('dotenv').config();

const Theme = require('./app/models/theme');

// // Récupérer tous les themes
// Theme.findAll((err, themes) => {
//     // console.log(themes);
    
//     const oneTheme = themes[0];
//     console.log(oneTheme.getName());
// });

// // Récupérer les infos d'un theme avec son id
// Theme.findById(1, (err, theme) => {
//     console.log(theme.getName());
// });

// Créer un Theme et l'insérer,
const newTheme = new Theme({});
newTheme.title = "Ludique";
console.log("Avant l'insert : ", newTheme);

newTheme.insert((err, newTheme) => {
    if (err) {
        console.trace(err);
    } else {
        // nouvelle version de newTheme
        console.log("Après l'insert : ", newTheme);
    };
});