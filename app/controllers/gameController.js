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
    
    oneGame: (req, res) => {
        // Pour récupérer le bon jeu
        const gameId = req.params.id;
        
        dataMapper.getOneGame(gameId, (err, data) => {
            if (err) {
                console.trace(err);
                res.status(500).render('500', {err});
            } else {
                const goodGame = data.rows[0];
                console.log(goodGame);
                res.render('game', {
                    goodGame,
                });
            };
        });
    }
};

module.exports = gameController;