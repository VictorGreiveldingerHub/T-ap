// Création d'une classe par entité 
class Result {
    // Mise en place des propriétés
    id;
    game_title;
    date;
    point;
    game_id;
    user_id;
    created_at;
    updated_at;

    // Mise en place du constructor
    // Prend en param un objet qui contient toutes les valeurs à recopier dans l'instance
    constructor(obj) {
        this.id = obj.id;
        this.game_title = obj.game_title;
        this.date = obj.date;
        this.point = obj.point;
        this.game_id = obj.game_id;
        this.user_id = obj.user_id;
        this.created_at = obj.created_at;
        this.updated_at = obj.updated_at;
    };
};

// On export la classe !
module.exports = Result; 