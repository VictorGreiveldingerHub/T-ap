const express = require('express');

// on importe nos controllers
const mainController = require('./controllers/mainController');


const router = express.Router();

// page d'accueil
router.get('/', mainController.homePage);


// Pour gérer les 404
router.use((req, res) => {res.status(404).render('404')});

// on exporte le router 
module.exports = router; 