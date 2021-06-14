const authController = {
    
    // Afficher le formulaire de connexion
    loginPage: (req, res) => {
        res.render('login');
    },
    
    // Traiter le formulaire de connexion
    // loginAction
    
    // Afficher le form d'inscription
    signupPage: (req, res) => {
        res.render('signup');
    },
    
    // Traiter le formulaire d'inscription
    // signupAction
};

module.exports = authController;