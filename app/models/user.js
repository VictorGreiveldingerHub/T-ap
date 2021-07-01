// Avec le CoreModel, je commence par require la classe
const CoreModel = require('./coreModel');
// const dbConnection = require('../dbConnection');

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
};

// On export la classe !
module.exports = User; 