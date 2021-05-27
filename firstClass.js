// D'abord on définit une classe Person

class Person {
    // On peut définir des propriétés a nos classes => on appelle ça des "membres" de la classe 
    prenom;
    age;

    // On peut aussi définir des méthodes 
    direBonjour () {
        console.log(`Salut je m'appelle ${this.prenom} et j'ai ${this.age} ans`);
    }

    vieillir () {
       return this.age++;
    }

    getAge () {
        return this.age;
    }

    setAge (value) {
        if (typeof value === "number" && value != 0) {
            this.age = value;
        }
    }
    // On définit un constructor 
    constructor (prenom, age) {
        // J'attribue la valeur du parametre prenom a la propriete de l'objet que je suis 
        // en train de construire
        this.prenom = prenom;
        this.age = age;

    };
};

// Instancions quelques personnes

const paul = new Person("Paul", 31);
//console.log(paul);
paul.direBonjour();
paul.setAge(1);
paul.vieillir();
paul.direBonjour();

const maurice = new Person("Maurice", 45);
//console.log(maurice);
maurice.direBonjour();