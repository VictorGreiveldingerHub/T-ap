// Création d'une classe par entité 
class Difficulty {
    // Mise en place des propriétés
    id;
    title;
    color;
    coefficient;
    created_at;
    updated_at;

    // Mise en place du constructor
    // Prend en param un objet qui contient toutes les valeurs à recopier dans l'instance
    constructor(obj) {
        this.id = obj.id;
        this.title = obj.title;
        this.color = obj.color;
        this.coefficient = obj.coefficient;
        this.created_at = obj.created_at;
        this.updated_at = obj.updated_at;
    };
};

// On export la classe !
module.exports = Difficulty; 