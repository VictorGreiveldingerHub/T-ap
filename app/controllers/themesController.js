const { Theme } = require('../models/associations');

const themesController = {
    themesPage: (req, res) => {
        Theme.findAll().then((themes) => {
            res.render('themes', {
                themes
            });
        }).catch((err) => {
            console.trace(err);
            res.status(500).render('500', {err});
        });
    },
    
    pageGameByTheme: (req, res, next) => {
        // récupérer le theme cible
        const themeId = req.params.id;
        
        Theme.findByPk(themeId, {
            include: [
                {
                    association: "themes",
                    include: ["gameTheme"]
                }
            ]
        }).then((theme) => {
            if (! theme) {
                return next(); // on transmet le traitement à la view 404
            };
            
            res.render('gameByTheme', {
                theme
            });
        }).catch((err) => {
            console.trace(err);
            res.status(500).render('500', {err});
        });
        
        // traitement de l'erreur
        
    }
};

module.exports = themesController;