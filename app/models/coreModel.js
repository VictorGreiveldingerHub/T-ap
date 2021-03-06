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
    
    // méthode pour insert l'instance courante
    insert (callback) {
        const tableStruct = [];
        const values = [];
        const dollars = [];
        
        let indexDollar = 1;
        for (let prop in this) {
            if (prop != "id" && prop != "created_at" && prop != "updated_at") {
                tableStruct.push(prop);
                values.push(this[prop]);
                dollars.push("$"+ indexDollar);
                indexDollar++;
            }; 
        };
        
        // console.log(tableStruct);
        // console.log(values);
        // console.log(dollars);
        const query = `INSERT INTO "${this.constructor.tableName}"
            (${tableStruct})
            VALUES (${dollars})
            RETURNING id, created_at
        `;
        
        // console.log(query);
        
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
    
    // Méthode update de l'instance courante
    update (callback) {
        // je prépare les différents tableaux,
        const tableStruct = [];
        const values = [];
        
        let indexDollars = 1;
        // Pour chaque prop de l'objet ...
        for (let prop in this) {
            if (prop != "id" && prop != "created_at" && prop != "updated_at") {
                const string = ` "${prop}" = $${indexDollars}`;
                indexDollars++;
                tableStruct.push(string);
                values.push(this[prop]);
            };
        };
        // je rajoute à la fin la prop "updated_at" qui est toujours la même
        tableStruct.push(` "updated_at" = CURRENT_TIMESTAMP`);
        console.log(tableStruct);
        console.log(values);

        // Quelques heures pour comprendre ce probleme
        // error: bind message supplies 6 parameters, but prepared statement "" requires 7
        
        // Comme le dernier dollar sert à spécifier l'id de l'objet a update, je dois l'ajouter dans le tableau de valeur ... 
        values.push(this.id);
        
        const query = `UPDATE "${this.constructor.tableName}" SET ${tableStruct} WHERE "id" = $${indexDollars} RETURNING updated_at`;
        
        // console.log(query);
          
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
    
    // Petite fonction utilitaire pour soit insert dans la BDD, soit update 
    save(callback) {
        // Si l'instance existe dans la BDD, elle a forcement un id,
        if (this.id) {
            this.update(callback);
        } else {
            this.insert(callback);
        };
    };
    
    // Une méthode pour trouver des instances en fonction de paramètre non définis à l'avance
    static findBy (params, callback) {
        const tableStruct = ['1=1'];
        const values = [];
        let indexDollar = 1;
        
        for (let prop in params) {
            let conditions = ` "${prop}" = $${indexDollar}`;
            tableStruct.push(conditions);
            values.push(params[prop]);
            indexDollar++;
        };
        
        const query = `SELECT * FROM "${this.tableName}" WHERE ${tableStruct.join(" AND ")}`;
        
        dbConnection.query(query, values, (err, data) => {
            
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
};

// On export la classe !
module.exports = CoreModel; 