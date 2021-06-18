const client = require('./database');

const dataMapper = {

    // Cherche tous les jeux dans la table game
    getAllGames: (callback) => {
        // Requete pour récup les figurines
        const query = `SELECT * FROM "game"`;

        console.log(query);
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
    }
};

module.exports = dataMapper;