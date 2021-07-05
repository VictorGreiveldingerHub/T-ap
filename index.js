// import des variables d'environnements
require('dotenv').config();

// Les session avec express-session
const session = require('express-session');

const express = require('express');

// Initialisation du port d'écoute
const PORT = process.env.PORT || 8080;

// Instanciation du serveur avec express
const app = express();

// On passe le middleware cookie a l'application
// app.use(cookieParser());
app.use(session({
    secret: 'vers le titre pro',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: (1000*60*60),
        secure: false
    }
}));

// Utilisation d'EJS réglages moteur de rendu
app.set('view engine', 'ejs');
app.set('views', 'app/views');

// Pour récuperer les données du form en POST = urlEncoded
app.use(express.urlencoded({extended: true}));

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static('integration'));

// MD pour vérifier qu'un utilisateur est en session ou pas
const userMD = require('./app/middlewares/userMD');
app.use(userMD);

// routage !
const router = require('./app/router');
app.use(router);

// Lancement du serveur, avec écoute du port défini 
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});