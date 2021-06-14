const dataMapper = require('../dataMapper');

const gameController = {
    
    // Récupérer tous les jeux pour les afficher 
    gamePage: (req, res) => {
        dataMapper.getAllGames((err, data) => {
            // traitement de l'erreur
            if (err) {
                console.trace(err);
                res.status(500).render('500', {err});
            } else {
                
                dataMapper.getTagsForGame((err2, data2) => {
                    if (err2) {
                        console.trace(err2);
                        res.status(500).render('500', {err2});
                    } else {
                        console.log(data2.rows);
                        const gamesTag = data2.rows;
                        
                        res.render('gameList', {
                            games: data.rows,
                            gamesTag
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