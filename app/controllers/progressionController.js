const dataMapper = require('../dataMapper');

const progressionController = {
    progresPage: (req, res) => {
        res.render('progression');
    },
    
    progresPageByGame: (req, res) => {
        res.render('progressionGame');            
    }
};

module.exports = progressionController;