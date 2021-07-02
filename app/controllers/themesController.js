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
    }
};

module.exports = themesController;