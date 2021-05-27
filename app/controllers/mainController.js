const dataMapper = require('../dataMapper');

const mainController = {
    homePage: (req, res) => {
        dataMapper.getAllGames((err, data) => {
            if (err) {
                console.trace(err);
                res.status(500).send(err);
            } else {
                res.render('homepage', {
                    games: data.rows,
                });
            };
        });
    },
};

module.exports = mainController;