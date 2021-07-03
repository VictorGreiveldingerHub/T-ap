// On va chercher la classe
const User = require('./app/models/user');

// et on instancie un nouveau user !
const back = new User({
    id: 500,
    firstname: "Back",
    lastname: "Back",
    email: "back@back.back",
    password: "back"
});

console.log(back);

// Avec try catch, on peut capturer une erreur, sans que cela n'arrete le bon déroulement du code !
try {
    back.setId('normalement une erreur car pas un nombre entier');
    console.log("Après setId");
} catch (error) {
    console.trace(error);
};

console.log("Bonjour");