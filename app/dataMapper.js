const client = require('./database');

const dataMapper = {

    // Cherche tous les jeux dans la table game
    getAllGames: (callback) => {
        // Requete pour récup les figurines
        const query = `SELECT * FROM "game"`;

        // Je lance la requete mais le callback je ne le définis pas dans dataMapper
        client.query(query, callback);
    },
    
    // Cherche tous les résultats d'un utilisateur
    getAllResults: (callback) => {
        // Récup les résultats
        const query = `SELECT * FROM "result" WHERE "user_id" = 1`;// Pour l'instant je fais du statique
        
        client.query(query, callback);
    },
    
    // Récupérer le bon jeu et afficher sa view
    getOneGame: (id, callback) => {
        const query = `SELECT * FROM "game" WHERE "id" = $1`;
        const values = [id];
        
        client.query(query, values, callback);
    }
};

module.exports = dataMapper;