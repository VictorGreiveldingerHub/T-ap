const authController = {
    
    // Afficher le formulaire de connexion
    loginPage: (req, res) => {
        res.render('login');
    },
    
    // Traiter le fomrmulaire de connexion
    // loginAction
    
    // Afficher le form d'inscription
    signupPage: (req, res) => {
        res.render('signup');
    }
};

module.exports = authController;