const { Game } = require('../models/associations');

const gameController = {
    
    // Récupérer tous les jeux pour les afficher 
    gamePage: (req, res) => {
        // POUR LE DATAMAPPER
        // dataMapper.getAllGames((err, data) => {
        //     // traitement de l'erreur
        //     if (err) {
        //         console.trace(err);
        //         res.status(500).render('500', {err});
        //     } else {
        //         res.render('gameList', {
        //             games: data.rows
        //         });
        //     };
        // });
        
        // AVEC SEQUELIZE
        Game.findAll({
            include: [
                "gameTheme" 
            ]
        }).then((games) => {
            console.log(games);
            res.render('gameList', {
                games
            });
        }).catch((err) => {
            // Gérer les eventuelles erreurs
            // je trace l'erreur en console pour pouvoir mieux réagir
            console.trace(err);
            // et je render une belle view pour l'utilisateur / navigateur
            res.status(500).render('500', {err});
        });
    },
    
    getOneGame: (req, res, next) => {
        // Pour récupérer le bon jeu
        const gameId = req.params.id;
        
        Game.findByPk(gameId, {
            include: [
                "gameDifficulties",
                "gameResult"
            ]
        }).then((game) => {
            // Si l'id demandé n'existe pas dans la BDD, cela renvoie "null"
            if (! game) {
                // si je n'ai pas de jeu correspondant, je passe à next(),
                // qui va renvoyer la page 404 !
                next();
            } else {
                res.render('game', {
                    game
                });
            };
        }).catch((err) => {
            console.trace(err);
            res.status(500).render('500', {err});
        });
    },
    
    // // Récupérer l'id d'un jeu et le(s) theme(s) associés
    // getOneGameAndTheme: (req, res) => {
    //     // Pour récupérer le bon jeu
    //     const gameId = req.params.id;
        
    //     // Je récupère d'abord l'id du jeu en question pour trouver le bon jeu
    //     dataMapper.getOneGame(gameId, (err, data) => {
    //         if (err) {
    //             console.trace(err);
    //             res.status(500).render('500', {err});
    //         } else {
    //             // Je viens ensuite récupérer le titre du theme
    //             dataMapper.getGameAndTheme(gameId, (err2, data2) => {
    //                 if(err2) {
    //                     // console.trace(err2);
    //                     res.status(500).render('500', {err2});
    //                 } else {
    //                     // console.log(data2.rows);
    //                     const goodGame = data.rows[0];
    //                     // Puis j'envoie à la view les bonnes informations !
    //                     res.render('game', {
    //                         goodGame,
    //                         theme: data2.rows
    //                     });
    //                 };
    //             });
    //         };
    //     });
    // },
};

module.exports = gameController;