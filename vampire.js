// require la class Person
// coder la class Vampire qui herite de la class person
// par défaut un vampire est mort 

const Person = require('./exo');

class Vampire extends Person {

    // Les vampires ont un super pouvoir, ils connaissent le nombre exact de vampire dans le monde 
    // On rajoute une propriété partagés entre toutes les instances
    // === propriété statique
    static nbVampire = 0; // forcement avecun nb par defaut
    
    constructor (nom, age) {
        super(nom, age);
        this.state = "mort";
    }

};

const dracula = new Vampire("Dracula", 800);
dracula.direBonjour();