// Création d'une classe par entité 
class User {
    // Mise en place des propriétés
    id;
    firstname;
    lastname;
    email;
    password;
    role;
    avatar;
    created_at;
    updated_at;

    // Mise en place du constructor
    // Prend en param un objet qui contient toutes les valeurs à recopier dans l'instance
    constructor(obj) {
        this.id = obj.id;
        this.email = obj.email;
        this.password = obj.password;
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
        this.role = obj.role;
        this.avatar = obj.avatar;
        this.created_at = obj.created_at;
        this.updated_at = obj.updated_at;
    };
};

// On export la classe !
module.exports = User; 