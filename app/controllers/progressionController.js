const dataMapper = require('../dataMapper');

const progressionController = {
    progresPage: (req, res) => {
        
        console.log(req.session);
        
        res.render('progression', {
            test: 'sessions',
        });
    },
    
    progresPageByGame: (req, res) => {
        res.render('progressionGame');            
    }
};

module.exports = progressionController;