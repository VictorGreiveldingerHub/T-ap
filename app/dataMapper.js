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
    getAllResults: (userId, callback) => {
        // Récup les résultats
        const query = `SELECT * FROM "result" WHERE "user_id" = $1`;
        const values = [userId];
        
        client.query(query, values, callback);
    },
    
    // Récupérer le bon jeu et afficher sa view
    getOneGame: (id, callback) => {
        const query = `SELECT * FROM "game" WHERE "id" = $1`;
        // Eviter les injections SQL dans la page
        const values = [id];
        
        client.query(query, values, callback);
    },
    
    // Récupérer les résultats pour un jeu
    getResults: (gameId, callback) => {
        const query = `SELECT * FROM "result" WHERE "game_id" = $1`;
        const values = [gameId];
        
        client.query(query, values, callback);
    },
    
    // Récupérer les tags d'un jeu
    getTagsForGame: (callback) => {
        const query = `SELECT * FROM "game_has_theme" JOIN "theme" ON "game_has_theme"."theme_id" = "theme"."id"`;
        console.log(query);
        
        client.query(query, callback);
    },
    
    
    // Pour ajouter un utilisateur à la BDD
    addUser: (userInfo, callback) => {
        const {firstname, lastname, email, password} = userInfo;
        
        const query = `INSERT INTO "user" (
            "firstname",
            "lastname",
            "email",
            "password"
        ) VALUES ($1, $2, $3, $4)`;
        const values = [firstname, lastname, email, password];
        client.query(query, values, callback);
    },
};

module.exports = dataMapper;