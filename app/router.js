const express = require('express');

// on importe nos controllers
const mainController = require('./controllers/mainController');
const gameController = require('./controllers/gameController');
const progressionController = require('./controllers/progressionController');
const authController = require('./controllers/authController');
const themesController = require('./controllers/themesController');
const userController = require('./controllers/userController');
const adminController = require('./controllers/adminController');

// Middleware
const userConnectedMD = require('./middlewares/userConnectedMD');
// Pour voir si l'utilisateur est un admin ou pas
const userRoleMD = require('./middlewares/userRoleMD');

const router = express.Router();

// page d'accueil
router.get('/', mainController.homePage);

// page des jeux
router.get('/gameList', gameController.gamePage);
router.get('/gameList/:id', gameController.getOneGame);

// page des thèmes
router.get('/themes', themesController.themesPage);
router.get('/themes/:id', themesController.pageGameByTheme);

// page progression => récupérer les résultats d'un user
router.get('/progression/:id', userConnectedMD, progressionController.progresPage);
router.get('/progression', userConnectedMD, progressionController.progresPage);

// // page progression => récupérer les résultats d'un jeu
// router.get('/progression/game/:id', progressionController.progresPageByGame);

// page admin
router.get('/admin', userConnectedMD, userRoleMD, adminController.adminPage);

// page se connecter
router.get('/login', authController.loginPage);
router.post('/login', authController.loginAction);

// page s'inscrire
router.get('/signup', authController.signupPage);
router.post('/signup', authController.signupAction);

// Page pour se déconnecter de la session
router.get('/logout', authController.logout);

// page profil
router.get('/profile', userController.getProfil);

// pour supprimer un utilisateur de la BDD
//router.get('/route/pour/delete/user/:id', authController.deleteUser);

// Pour gérer les 404
router.use((req, res) => {res.status(404).render('404')});

// on exporte le router 
module.exports = router; 