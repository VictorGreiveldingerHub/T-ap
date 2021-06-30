// Avec le CoreModel, je commence par require la classe
const CoreModel = require('./coreModel');
const dbConnection = require('../dbConnection');

// Puis la classe User vient hériter du CoreModel
class User extends CoreModel {
    
    static tableName = "user";
    
    // Plus besoin d'id, created_at et updated_at vu que les props
    // sont présentes dans le CoreModel
    firstname;
    lastname;
    email;
    password;
    role;
    avatar;

    constructor(obj) {
        // je remplace this.id = obj.id etc ... 
        // par super afin d'appeler ou d'accéder à des fonctions définies 
        // sur l'objet parent, ici CoreModel.
        super(obj);
        
        this.email = obj.email;
        this.password = obj.password;
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
        this.role = obj.role;
        this.avatar = obj.avatar;
    };
    
    static findAll (callback) {
        const query = `SELECT * FROM "user"`;
        
        dbConnection.query(query, (err, data) => {
            
            if (err) {
                callback(err, null);
            } else {
                const allUsers = [];
                for (let obj of data.rows) {
                    const everyUsers = new User(obj);
                    allUsers.push(everyUsers);
                };
                callback(null, allUsers);
            };
        });
    };
    
    static findById (id, callback) {
        const query = `SELECT * FROM "user" WHERE "id" = $1`;
        const values = [id];
        
        dbConnection.query(query, values, (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                const firstUser = data.rows[0];
                if (firstUser) {
                    const user = new User(firstUser);
                    callback(null, user)
                } else {
                    callback(null, undefined);
                };
            };
        });
    };
    
    insert(callback) {
        const query = `INSERT INTO "user" ("firstname", "lastname", "email", "password", "role", "avatar") VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, created_at`;
        const values = [this.firstname, this.lastname, this.email, this.password, this.role, this.avatar];
      
        dbConnection.query(query, values, (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                const returnedInfos = data.rows[0];
                
                this.id = returnedInfos.id;
                this.created_at = returnedInfos.created_at;
                
                callback(null, this);
            };
        });
    };
    
    update (callback) {
        const query = `UPDATE "user" SET
            firstname = $1,
            lastname = $2,
            email = $3,
            password = $4,
            role = $5,
            avatar = $6,
            updated_at = CURRENT_TIMESTAMP
            WHERE "id" = $7
            RETURNING updated_at
        `;
        const values = [this.firstname, this.lastname, this.email, this.password, this.role, this.avatar, this.id];
        
        // lancer la requête
        dbConnection.query(query, values, (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                const returnedInfos = data.rows[0];
                
                this.updated_at = returnedInfos.updated_at;
                
                callback(null, this)
            };
        });
    };
    
    delete (callback) {
        const query = `DELETE FROM "user" WHERE "id" = $1`;
        const values = [this.id];
        
        dbConnection.query(query, values, callback);
    };
};

// On export la classe !
module.exports = User; 