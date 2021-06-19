const express = require('express');

// on importe nos controllers
const mainController = require('./controllers/mainController');
const gameController = require('./controllers/gameController');
const progressionController = require('./controllers/progressionController');
const authController = require('./controllers/authController');


const router = express.Router();

// page d'accueil
router.get('/', mainController.homePage);

// page des jeux
router.get('/gameList', gameController.gamePage);
router.get('/gameList/:id', gameController.getOneGameAndTheme);

// page progression => récupérer les résultats d'un user
router.get('/progression', progressionController.progresPage);

// page progression => récupérer les résultats d'un jeu
// router.get('/progression/game/:id', progressionController.progresPageByGame);


// page se connecter
router.get('/login', authController.loginPage);
router.post('/login', authController.loginAction);

// page profil
// router.get('/profile', userController.getProfil);

// page s'inscrire
router.get('/signup', authController.signupPage);
router.post('/signup', authController.signupAction);


// pour supprimer un utilisateur de la BDD
router.get('/route/pour/delete/user/:id', authController.deleteUser);

// Pour gérer les 404
router.use((req, res) => {res.status(404).render('404')});

// on exporte le router 
module.exports = router; 