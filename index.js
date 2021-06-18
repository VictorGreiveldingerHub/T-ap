// import des variables d'environnements
require('dotenv').config();

const express = require('express');

const router = require('./app/router');

// Initialisation du port d'écoute
const PORT = process.env.PORT || 8080;

// Instanciation du serveur avec express
const app = express();


// Utilisation d'EJS réglages moteur de rendu
app.set('view engine', 'ejs');
app.set('views', 'app/views');

// Pour récuperer les données du form en POST = urlEncoded
app.use(express.urlencoded({extended: true}));

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static('integration'));

// routage !
app.use(router);

// Lancement du serveur, avec écoute du port défini 
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});