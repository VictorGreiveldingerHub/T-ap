const CoreModel = require('./coreModel');

const dbConnection = require('../dbConnection');

class Theme extends CoreModel {

    title;
    color;

    constructor(obj) {
        super(obj);
        
        this.title = obj.title;
        this.color = obj.color;
    };
    
    // Pour voir la puissance des classes, je crée une méthode pour récupérer
    // le titre d'un theme
    getName() {
        return "Je suis le theme " + this.title;
    }
    
    /* Méthode Active Record */
    
    // Une méthode pour récupérer tous les themes d'un coup.
    static findAll(callback) {
        // Je crée une query
        const query = `SELECT * FROM "theme"`;
        
        // On passe la requete au client, avec le callback
        dbConnection.query(query, (err, data) => {
            if (err) {
                // Si il y a une erreur, j'appelle le callback en lui passant uniquement l'err
                callback(err, null);
            } else {
                // Si il n'y a pas d'erreur, on passe la liste des résultats au callback,
                // sauf qu'avant, il faut bien transformer les objets simple en instance de Theme
                
                // Les résultats sont dans data.rows 
                
                const allTheme = []; // prépare un tableau pour les vrais Theme
                
                for (let obj of data.rows) {
                    let newTheme = new Theme(obj);
                    allTheme.push(newTheme);
                };
                
                callback(null, allTheme);
            }
        });
    };
    
    // Une méthode pour récupérer un seul Theme, en utilisant son id.
    
    // Une méthode pour insérer l'instance courante dans la BDD.
    
    // Une méthode pour mettre à jour l'instance courante dans la BDD.
    
    // Uné méthode pour supprimer l'instance courante.
};

module.exports = Theme; 