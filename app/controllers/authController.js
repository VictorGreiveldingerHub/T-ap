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
        // l'information qui m'interesse (le username) est dans req.body
        const username = req.body.username;

        // si on a pas d'info, on redirige
        if (!username) {
            return res.redirect('/login');
        };

        // Si j'ai un nom d'utilisateur (dans le futur, j'irai vérifer le mot de passe ...)

        // Aujourd'hui on laisse tout le monde entrer
        // je vais donc DIRE ("répondre") au navigateur "enregistre cette info dans un cookie"
        // pour faire ça, on utilise la méthode "cookie" de res
        // res.cookie('username', username);

        // EDIT : on veut utiliser express-session au final
        // grace au MDW on peut directement utiliser l'objet req.session
        // On peut l'utiliser en lecture et en ecriture 
        req.session.username = username;

        // maintenant que l'info est dans un cookie, je peux rediriger vers '/'
        res.redirect('/');
    },
    
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