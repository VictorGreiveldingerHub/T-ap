const dataMapper = require('../dataMapper');

const progressionController = {
    progresPage: (req, res) => {
                
        if (req.session.username) {
            res.render('progression', {
                username: req.session.username
            });
        } else {
            // y'a rien dans la session ==> va te connecter
            res.redirect('/login');
        };
    },
    
    progresPageByGame: (req, res) => {
        res.render('progressionGame');            
    }
};

module.exports = progressionController;