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
                        // console.log(data2.rows);    
                        // console.log(data.rows);
                        const goodGames = data.rows;
                        const goodTheme = data2.rows;
                        
                        // for (let game of goodGames) {
                        //     console.log(game.id);
                        //     // Je veux récupérer le titre du theme pour chaque jeu
                        //     goodTheme.forEach(element => {
                        //         // console.log(element);
                        //         if (element.game_id === game.id) {
                                    
                        //             const theme = element.title;
                        //             // console.log(theme);
                        //             // return theme;
                        //             res.render('gameList', {
                        //                 goodGames,
                        //                 theme  
                        //             });
                        //         };
                                
                        //         // console.log(theme)
                        //     });
                        // };
                        // console.log(goodGames);
                        
                        res.render('gameList', {
                            goodGames,
                            goodTheme  
                        });
                    };
                });
            };
        });
    },
    
    getOneGame: (req, res) => {
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