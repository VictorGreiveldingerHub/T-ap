const authController = {
    
    // Afficher le formulaire de connexion
    loginPage: (req, res) => {
        res.render('login');
    },
    
    // Traiter le formulaire de connexion
    loginAction: (req, res) => {},
    
    // Méthode pour se déconnecter de la session 
    logout: (req, res) => {
        delete req.session.username; // c'est l'équivalent de `req.session.username = undefined;`

        //et hop, on redirige
        res.redirect('/');
    },
    
    // Afficher le form d'inscription
    signupPage: (req, res) => {
        res.render('signup');
    },
    
    // Traiter le formulaire d'inscription
    signupAction: (req, res) => {

    },
    
    // deleteUser: (req, res) => {
    //     const userId = req.params.id;
        
    //     dataMapper.deleteUser(userId, (err, data) => {
    //         if (err) {
    //             console.log(req.body);
    //             res.status(500).send(err);
    //         } else {
    //             res.redirect('/');
    //         };
    //     });
    // }
};

module.exports = authController;