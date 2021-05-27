// Construit un objet 
const personFactory = {

    // qui fait un objet
    person : (name, age) => {
        let newPerson = {};
        newPerson.name = name;
        newPerson.age = age;

        newPerson.buildNewPerson = () => {
            console.log(`Salut je m'appelle ${newPerson.name} et j'ai ${newPerson.age} ans`);
        }
        return newPerson;
    },

};

const maurice = personFactory.person("Maurice", 34);

maurice.buildNewPerson();

