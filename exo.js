// Créer une class Person avec les propriétés (=> membres) nom, age, state
// La class person a un constructor avec les parametres nom et age et met la valeur de state a vivant
// la class person a une methode toString qui renvoie une chaine de caractère de présentation et une methode direBonjour
// qui console le résulat de tostring

class Person {
    nom;
    age;
    state = "vivant";

    constructor (nom, age) {
        this.nom = nom;
        this.age = age;
    }

    toString () {
        let string = `Salut je m'appelle ${this.nom}, j'ai ${this.age} ans et je suis ${this.state}`;
        return string;
    }

    direBonjour () {
        console.log(this.toString());
    }
};

const victor = new Person("Victor", 25);
console.log(victor);
victor.direBonjour();

module.exports = Person;