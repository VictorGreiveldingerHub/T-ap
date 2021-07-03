const { Result } = require('../models/associations');

const progressionController = {
    progresPage: (req, res) => {
        // Ici je veux récupérer les résultats de tous les jeux pour l'utilisateur connecté
        // j'essaye avec req.session.user.id qui reprend l'id de l'utilisateur en session
        // pour afficher uniquement SES résultats
        
        
        // console.log(req.session.user);
        Result.findAll({
            where: {
                user_id: req.session.user.id
            },
        }).then((results) => {    
            res.render('progression', {
                results
            })
        }).catch((err) => {
            console.trace(err);
            res.status(500).render('500', {err});
        });
    },
    
    progresPageByGame: (req, res) => {
        res.render('progressionGame');            
    }
};

module.exports = progressionController;