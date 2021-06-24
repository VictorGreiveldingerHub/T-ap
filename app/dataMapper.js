const client = require('./database');

const dataMapper = {

    // Cherche tous les jeux dans la table game
    getAllGames: (callback) => {
        // Requete pour récup les jeux
        const query = `SELECT * FROM "game"`;

        // Je lance la requete mais le callback je ne le définis pas dans dataMapper
        client.query(query, callback);
    },
    
    // Récupérer le bon jeu et afficher sa view
    getOneGame: (id, callback) => {
        const query = `SELECT * FROM "game" WHERE "id" = $1`;
        // Eviter les injections SQL dans la page
        const values = [id];
        
        client.query(query, values, callback);
    },
    
    // On cherche si un utilisateur est déjà présent en BDD
    searchUser: (email, callback) => {
        const query = `SELECT "email" FROM "user" WHERE "email" IN ($1)`;
        const values = [email];
        console.log('Valeur du mail dans dataMApper', values);
        
        console.log(query);
        client.query(query, values, callback);
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
    
    // Supprimer un utilisateur de la BDD
    deleteUser: (userId, callback) => {
        const query = `DELETE FROM "user" WHERE "id" = $1`;
        const values = [userId];
        
        client.query(query, values, callback);
    },
    
    // Récupérer le nom du theme associé au jeu avec la table de liaison "game_has_theme"
    getGameAndTheme: (gameId, callback) => {
        
        const query = `SELECT "t"."title" FROM "game_has_theme" AS "gt" JOIN "theme" AS "t" ON "gt"."theme_id" = "t"."id" WHERE "gt"."game_id" = $1`;
        const values = [gameId];
        
        client.query(query, values, callback);
    },
};

module.exports = dataMapper;