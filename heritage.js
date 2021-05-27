class Vehicule {
    nbreRoue; // le nombre de roue
    puissanceMoteur; // puissance du moteur 
    isStarted; // Le moteur est il en route

    constructor (nbreRoue, puissanceMoteur) {
        this.nbreRoue = nbreRoue;
        this.puissanceMoteur = puissanceMoteur;
        this.isStarted = false;
    }

    start () {
        this.isStarted = true;
    }

    stop () {
        this.isStarted = false;
    }

    toString () {
        let result = `Je suis un véhicule à ${this.nbreRoue} roues et d'une puissance de moteur ${this.puissanceMoteur}`;

        if (this.isStarted) {
            result += `et je suis en marche`;
        } else {
            result += `mais je suis a l'arret`;
        };

        return result;
    }
};

const twingo = new Vehicule(4, 90);
console.log(twingo.toString());
twingo.start();
console.log(twingo.toString());