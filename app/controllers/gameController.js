const dataMapper = require('../dataMapper');

const gameController = {
    gamePage: (req, res) => {
        dataMapper.getAllGames((err, data) => {
            if (err) {
                console.trace(err);
                res.status(500).render('500', {err});
            } else {
                res.render('gameList', {
                    games: data.rows,
                });
            };
        });
    },
};

module.exports = gameController;