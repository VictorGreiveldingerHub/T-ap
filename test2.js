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

// // Créer un Theme et l'insérer,
// const newTheme = new Theme({});
// newTheme.title = "Test avant l'update";
// console.log("Avant l'insert : ", newTheme);

// newTheme.insert((err, newTheme) => {
//     if (err) {
//         console.trace(err);
//     } else {
//         // nouvelle version de newTheme
//         console.log("Après l'insert : ", newTheme);
//     };
// });

// // Test pour supprimer un theme de la BDD
// // Ici je vais utiliser directement la méthode findById
// Theme.findById(3, (err, theme) => {
//     if (err) {
//         console.trace(err);
//     } else {
//         // je vérifie si theme existe,
//         if (theme) {
//             // et je viens le supprimer.
//             theme.delete((err2, deletedTheme) => {
//                 console.log("Erreur pour supprimer", err2);
//                 console.log("Suppression :", deletedTheme);
//             });  
//         }
//     };
// });

// // test pour l'update,
// Theme.findById(4, (err, theme) => {
//     if (err) {
//        console.trace(err);
//     } else {
//         theme.title = "Ludique_après_update";
//         theme.color = "#C0F0EE";
        
//         theme.update((err2, updatedTheme) => {
//             if (err2) {
//                 console.trace(err2);
//             } else {
//                 console.log(updatedTheme);
//             };
//         });
//     };
// });

const User = require('./app/models/user');
// User.findById(2, (err, user) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     };
// });

// const michel2 = new User({
//     firstname : 'Michel2',
//     lastname : 'Dupont2',
//     email : 'michel2@dupont.com',
//     password : 12345488484,
//     role : 'admin',
//     avatar : '',
// });

// michel2.insert((err, newUser) => {
//     if (err) { return console.log(err); };
//     console.log(newUser);
// });

// // Test : récuperer l'utilisateur avec l'id 7
// // changer son email en dupont@michel.com
// // sauvegarder le changement
// User.findById(7, (err, user) => {
//     if (err) { return console.log(err); };
//     user.email = "dupont@michel.com";
//     user.update((err2, user2) => {
//         if (err2) { return console.log(err2); };
//         console.log(user2);
//     });
// });