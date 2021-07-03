// Le but de ce fichier est uniquement d'afficher la page d'accueil

const mainController = {
    
    // méthode pour afficher la page d'accueil
    homePage: (req, res) => {
        res.render('homepage');
    },
};

module.exports = mainController;