const dataMapper = require('../dataMapper');

const gameController = {
    gamePage: (req, res) => {
        dataMapper.getAllGames((err, data) => {
            if (err) {
                console.trace(err);
                res.status(500).render('500', {err});
            } else {
                dataMapper.getTagsForGame((err2, data2) => {
                    if (err2) {
                        console.trace(err2);
                        res.status(500).render('500', {err2});
                    } else {
                        console.log(data2.rows[0]);
                        const gamesTag = data2.rows[0];
                        res.render('gameList', {
                            games: data.rows,
                            gamesTag: data2.rows
                        });
                    };
                });
            };
        });
    },
    
    oneGame: (req, res) => {
        // Pour récupérer le bon jeu
        const gameId = req.params.id;
        
        dataMapper.getOneGame(gameId, (err, data) => {
            if (err) {
                console.trace(err);
                res.status(500).render('500', {err});
            } else {
                const goodGame = data.rows[0];
                res.render('game', {
                    goodGame,
                });
            };
        });
    }
};

module.exports = gameController;