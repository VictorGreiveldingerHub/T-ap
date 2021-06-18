const dataMapper = require("../dataMapper");

const authController = {
    
    // Afficher le formulaire de connexion
    loginPage: (req, res) => {
        res.render('login');
    },
    
    // Traiter le formulaire de connexion
    loginAction: (req, res) => {
        // L'information que je veux est dans req.body
        // const email = req.body.email;
        
        // // Si on a pas d'info on redirige
        // if (!email) {
        //     return res.redirect('/login');
        // }
        // // Je dis au navigateur d'enregistrer l'information dans un cookie
        // // méthode cookie de res
        // res.cookie('email', email);
        console.log(req.session.email);
    },
    
    // Méthode pour se déconnecter de la session 
    logout: (req, res) => {
        // Supprimer le user de la session
        delete req.session.user;
    },
    
    // Afficher le form d'inscription
    signupPage: (req, res) => {
        res.render('signup');
    },
    
    // Traiter le formulaire d'inscription
    signupAction: (req, res) => {
        // Récupérer les données du formulaire
        // const newUser = req.body;
        // // console.log(newUser.email);
        // // Vérifier que les infos sont logiques 
        
        // const newUserMail = newUser.email;
        // console.log("le mail :", newUserMail);
        const userMail = req.body.email;
        // Vérifier que l'utilisateur n'existe pas déjà avec son email. ..
        dataMapper.searchUser(userMail, (err, data) => {
            if (err) {
                console.trace(err);
                res.status(500).render('500', {err});
            } else {
                console.log(data.rows);
                // if (data) {
                //     return res.render('signup', {
                //         error: 'Cet email existe déjà'
                //     });
                // };
            };
        });
        
        // dataMapper.addUser(newUser, (error, data) => {
        //     if (error) {
        //         console.log(req.body);
        //         res.status(500).send(error);
        //     } else {
        //         console.log(data);
        //         res.redirect('/');
        //     };
        // });
    },
    
    deleteUser: (req, res) => {
        const userId = req.params.id;
        
        dataMapper.deleteUser(userId, (err, data) => {
            if (err) {
                console.log(req.body);
                res.status(500).send(err);
            } else {
                res.redirect('/');
            };
        });
    }
};

module.exports = authController;