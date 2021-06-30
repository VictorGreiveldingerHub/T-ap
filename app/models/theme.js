const CoreModel = require('./coreModel');

const dbConnection = require('../dbConnection');

class Theme extends CoreModel {

    static tableName = "theme";
    
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
    // Je donne 2 paramètres, un id et le callback pour passer le résultat à la fonction suivante
    static findById(id, callback) {
        // construire une requête préparée avec le tableau de valeur
        const query = `SELECT * FROM "theme" WHERE "id" = $1`;
        
        const values = [id];
        
        // lancer la requête
        dbConnection.query(query, values, (err, data) => {
            if (err) {
                // Si il y a une erreur, je la donne au callback
                callback(err, null);
            } else {
                // transformer le premier résultat en instance de Theme
                const firstResult = data.rows[0];
                // je vérifie que l'id existe
                if (firstResult) {
                    const newTheme = new Theme(firstResult);
                    
                    // passer le Theme au callback
                    callback(null, newTheme);
                } else {
                    // si il n'y a pas de résultat, on renvoie undefined
                    callback(null, undefined);
                };
            };
        });
    };
    
    // Une méthode pour insérer l'instance courante dans la BDD.
    insert(callback) {
        // Créer un query avec le tableau de valeur qui correspond
        // PS : vu que dans ma BDD, l'id est un SERIAL, je ne suis pas forcé
        // d'intégrer un id ici, tout comme created_at et updated_at !
        const query = `INSERT INTO "theme"( "title" ) VALUES( $1 ) RETURNING id, created_at`;
        
        const values = [this.title];
        
        // lancer la query dans la BDD
        // je fais un callback pour préciser ce qui s'est mal ou bien passé, parce que sinon
        // je n'ai pas de retour
        dbConnection.query(query, values, (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                // Si l'insertion s'est bien passée, je récupère dans data.rows[0]
                // les infos que j'ai demandé à la BDD grâce au RETURNING
                const returnedInfos = data.rows[0];
                // je veux mettre à jour l'instance qui appelle la méthode, donc this
                this.id = returnedInfos.id;
                this.created_at = returnedInfos.created_at;
                
                // puis je passe au callback la nouvelle version de l'instance courante
                callback(null, this);
            };
        });
    };
    
    // Une méthode pour mettre à jour l'instance courante dans la BDD.
    update (callback) {
        // la requete SQL "UPDATE" en utilisant les données de this, et le tableau de values
        const query = `UPDATE "theme" SET
            title = $1,
            color = $2,
            updated_at = CURRENT_TIMESTAMP
            WHERE "id" = $3
            RETURNING updated_at
        `;
        const values = [this.title, this.color, this.id];
        
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
    
    // Une méthode pour supprimer l'instance courante.
    delete (callback) {
        // La requete pour supprimer un theme et le tableau de valeur
        const query = `DELETE FROM "theme" WHERE "id" = $1`;
        const values = [this.id];
        
        // ici, pour le callback, aucune transformation, pas de mise à jour,
        // pas besoin d'information ... donc seulement callback.
        dbConnection.query(query, values, callback);
    };
};

module.exports = Theme; 