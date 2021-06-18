const dataMapper = require('../dataMapper');

const progressionController = {
    progresPage: (req, res) => {
        
        // Afficher un cookie
        // console.log(req.headers.cookie); // chaine de caractere, pas simple à manipuler
        
        // Avec le middleware cookie parser
        console.log(req.cookies.test); // un objet donc plus facile à manipuler
        
        // Test "test" est présent dans les cookies ?
        if (req.cookies.test) {
            // si c'est le cas je renvoie la vue progression
            res.render('progression', {
                username: req.cookies.test
            });
        } else {
            // sinon redirection vers '/login'
            res.redirect('/login');
        };
    },
    
    progresPageByGame: (req, res) => {
        res.render('progressionGame');            
    }
};

module.exports = progressionController;