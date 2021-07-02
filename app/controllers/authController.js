const { User } = require('../models/associations');

// Librairie pour tester le format des emails
const emailValidator = require('email-validator');

// Pour hasher le mot de passe
const bcrypt = require('bcrypt');

const authController = {
    
    // Afficher le formulaire de connexion
    loginPage: (req, res) => {
        res.render('login');
    },
    
    // Traiter le formulaire de connexion
    loginAction: (req, res) => {
        // récupérer les infos du form
        const {email, password} = req.body;
        
        // tenter de récupérer l'utilisateur via l'email donné
        User.findOne({
            where: {
                email
            }
        }).then((user) => {
            // erreur si il n'existe pas
            if (!user) {
                return res.render('login', {
                    error: "Cet email n'existe pas"
                });
            };
            
            // si il existe, vérification du mot de passe
            if (!bcrypt.compareSync(password, user.password )) {
                return res.render('/login', {
                    error: "Mauvais mot de passe"
                });
            };
            
            // Si out est bon, on le met en session
            req.session.user = user;
            res.redirect('/');
            
        }).catch((err) => {
            console.trace(err);
            res.status(500).render('500', {err});
        });
        
    },
    
    // Méthode pour se déconnecter de la session 
    logout: (req, res) => {
        delete req.session.user; // c'est l'équivalent de `req.session.user = undefined;`

        //et hop, on redirige
        res.redirect('/');
    },
    
    // Afficher le form d'inscription
    signupPage: (req, res) => {
        res.render('signup');
    },
    
    // Traiter le formulaire d'inscription
    signupAction: (req, res) => {
        // récupérer les données du formulaire,
        const data = req.body;
        
        // NTUI : vérifier que les infos sont logiques,
        
        // vérifier que l'utilisateur n'existe pas déjà avec son email
        User.findOne({
            where: {
                email: data.email
            }
        }).then((user) => {
            // préparation d'une liste vide pour stocker les erreurs
            let errorList = [];
            
            if (user) {
                errorList.push('Cet email existe déjà');
            };
            
            // Nom et prénom non vide,
            if (!data.firstname) {
                errorList.push('Le prénom ne peut pas être vide');
            };
            
            if (!data.lastname) {
                errorList.push('Le nom ne peut pas être vide');
            };
            
            // adresse mail valide,
            // email-validator ;)
            if (!emailValidator.validate(data.email)) {
                errorList.push("L'email n'est pas un email valide");
            };
            
            // longueur minimum du mot de passe, par sécurité plus il est long plus il est difficile
            // à trouver.
            // 8 caractères minimum
            if (data.password.length < 8) {
                errorList.push("Le mot de passe doit contenir au moins 8 caractères");
            };
            
            // mot de passe + confirmation,
            // pour pallier au probleme suivant data.password !== data.password-confirm
            // ou le tiret va poser probleme => on passe le tout entre crochets !
            if (data.password !== data['password-confirm']) {
                errorList.push("Le mot de passe et la confirmation doivent être les mêmes");
            };
            
            // si on a au moins une erreur, reaffiche le form avec les erreurs
            
            // Si tout est ok, insérer les données en BDD,
            
            // Si tout va bien alors errorList est vide
            if (errorList.length === 0) {
                // traitement de la donnée
                const newUser = new User();
                newUser.firstname = data.firstname;
                newUser.lastname = data.lastname;
                newUser.email = data.email;
                // Vu depuis la doc, je hash le mot de passe
                newUser.password = bcrypt.hashSync(data.password, 10);
                
                newUser.save().then((user) => {
                    // Une fois que tout est bon, je redirige vers /login
                    // res.redirect('/login');
                    
                    // Au lieu de rediriger vers le login, je vais directement mettre 
                    // l'utilisateur en session.
                    req.session.user = user;
                    res.redirect('/');
                    
                }).catch((err) => {
                    console.trace(err);
                    res.status(500).render('500', {err});
                });
            } else {
                res.render('signup', {
                    errorList
                });
            };
        }).catch((err) => {
            console.trace(err);
            res.status(500).render('500', {err});
        });
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