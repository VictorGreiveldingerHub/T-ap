const CoreModel = require('./coreModel');

// Avec la création du CoreModel,
class User extends CoreModel {
    // Mise en place des propriétés pour chaque champ de la table correspondante.
    firstname;
    lastname;
    email;
    password;
    role;
    avatar;

    constructor(obj) {
        super(obj); // quand je vais construire un User, je vais d'abord construire un CoreModel en lui passant les valeurs (id, created_at, updated_at)
        
        // Puis je vais continuer le travail en prenant email, password etc ...
        this.email = obj.email;
        this.password = obj.password;
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
        this.role = obj.role;
        this.avatar = obj.avatar;
    };
};

module.exports = User; 