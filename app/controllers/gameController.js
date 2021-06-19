const { DatabaseError } = require('pg-protocol');
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
                res.render('gameList', {
                    games: data.rows
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
    },
    
    // Récupérer l'id d'un jeu et le(s) theme(s) associés
    getOneGameAndTheme: (req, res) => {
        // Pour récupérer le bon jeu
        const gameId = req.params.id;
        
        // Je récupère d'abord l'id du jeu en question pour trouver le bon jeu
        dataMapper.getOneGame(gameId, (err, data) => {
            if (err) {
                console.trace(err);
                res.status(500).render('500', {err});
            } else {
                // Je viens ensuite récupérer le titre du theme
                dataMapper.getGameAndTheme(gameId, (err2, data2) => {
                    if(err2) {
                        console.trace(err2);
                        res.status(500).render('500', {err2});
                    } else {
                        console.log(data2.rows);
                        const goodGame = data.rows[0];
                        // Puis j'envoie à la view les bonnes informations !
                        res.render('game', {
                            goodGame,
                            theme: data2.rows
                        });
                    };
                });
            };
        });
        
    } 
};

module.exports = gameController;