// Création d'une classe par entité 
class Game {
    // Mise en place des propriétés
    id;
    title;
    category;
    description;
    color;
    rule;
    created_at;
    updated_at;

    // Mise en place du constructor
    // Prend en param un objet qui contient toutes les valeurs à recopier dans l'instance
    constructor(obj) {
        this.id = obj.id;
        this.title = obj.title;
        this.category = obj.category;
        this.description = obj.description;
        this.color = obj.color;
        this.rule = obj.rule;
        this.created_at = obj.created_at;
        this.updated_at = obj.updated_at;
    };
};

// On export la classe !
module.exports = Game; 