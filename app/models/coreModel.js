// Vu que les propriétés id, created_at et updated_at sont présentent dans toutes les classes, au lieu de se répéter
// on vient coder un CoreModel avec l'héritage pour la factorisation.
const dbConnection = require('../dbConnection');

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
    
    // Exemple de getter et setter pour voir l'utilisation de try catch,
    getId() {
        return this.id;
    };
    
    setId(value) {
        // Je veux vérifier que id est bien un entier
        if ( Number.isInteger(value)) {
            this.id = value;
        } else {
            // Je viens lever ou jeter une exception
            // càd une erreur mais qui est jetée ou levée
            throw Error("Id must be an integer value.")
        }
    };
    
    // // Exemple pour this avec et sans static
    // printThis () {
    //     console.log(this);
    // };
    
    // static printStaticThis () {
    //   console.log(this);  
    // }; 
    
    /* Méthodes Active Record */
    
    // Méthode pour récupérer les models de la BDD
    static findAll (callback) {
        const query = `SELECT * FROM "${this.tableName}"`;
        
        dbConnection.query(query, (err, data) => {
            
            if (err) {
                callback(err, null);
            } else {
                const allModels = [];
                for (let obj of data.rows) {
                    const everyModels = new this(obj);
                    allModels.push(everyModels);
                };
                callback(null, allModels);
            };
        });
    };
    
    // Méthode pour récupérer 1 seul modèle grâce à son id
    static findById (id, callback) {
        const query = `SELECT * FROM "${this.tableName}" WHERE "id" = $1`;
        const values = [id];
        
        dbConnection.query(query, values, (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                const firstResult = data.rows[0];
                if (firstResult) {
                    // on peut faire const oneResult = new this(firstResult),
                    // puis passer oneResult en paramètre du callback aussi.
                    callback(null, new this(firstResult))
                } else {
                    callback(null, undefined);
                };
            };
        });
    };
    
    // une méthode pour supprimer l'instance courante de la BDD
    delete(callback) {
        const query = `DELETE FROM "${this.constructor.tableName}" WHERE "id" = $1`;
        const values = [this.id];
        
        dbConnection.query(query, values, callback);
    };
};

// On export la classe !
module.exports = CoreModel; 