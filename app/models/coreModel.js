// Vu que les propriétés id, created_at et updated_at sont présentent dans toutes les classes, au lieu de se répéter
// on vient coder un CoreModel avec l'héritage pour la factorisation.

// Toutes les classes vont donc hériter de CoreModel
class CoreModel {
    // Mise en place des propriétés
    id;
    created_at;
    updated_at;

    // Mise en place du constructor
    // Prend en param un objet qui contient toutes les valeurs à recopier dans l'instance
    constructor(obj) {
        this.id = obj.id;
        this.created_at = obj.created_at;
        this.updated_at = obj.updated_at;
    };
};

// On export la classe !
module.exports = CoreModel; 