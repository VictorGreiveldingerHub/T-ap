const express = require('express');

// on importe nos controllers
const mainController = require('./controllers/mainController');
const gameController = require('./controllers/gameController');
const progressionController = require('./controllers/progressionController');


const router = express.Router();

// page d'accueil
router.get('/', mainController.homePage);

// page des jeux
router.get('/gameList', gameController.gamePage);
router.get('/gameList/:id', gameController.oneGame);

// page progression
router.get('/progression', progressionController.progresPage);


// Pour gérer les 404
router.use((req, res) => {res.status(404).render('404')});

// on exporte le router 
module.exports = router; 