const dataMapper = require("../dataMapper");

const authController = {
    
    // Afficher le formulaire de connexion
    loginPage: (req, res) => {
        res.render('login');
    },
    
    // Traiter le formulaire de connexion
    loginAction: (req, res) => {
        
    },
    
    // Afficher le form d'inscription
    signupPage: (req, res) => {
        res.render('signup');
    },
    
    // Traiter le formulaire d'inscription
    signupAction: (req, res) => {
        dataMapper.addUser(req.body, (error, data) => {
            if (error) {
                console.log(req.body);
                res.status(500).send(error);
            } else {
                console.log(data);
                res.redirect('/');
            };
        });
    },
};

module.exports = authController;