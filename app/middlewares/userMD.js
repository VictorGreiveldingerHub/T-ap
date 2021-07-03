// MD : pour tester la présence d'un user en session et de transmettre à res.locals l'info
const userMD = (req, res, next) => {
    if (req.session.user) {
        res.locals.user = req.session.user;
        // Je regarde si je peux récupérer l'id de l'utilisateur
        // pour pouvoir afficher les résultats de l'utilisateur avec son id
        console.log(req.session.user.id);
    } else {
        res.locals.user = false;
    };
    next();
};

module.exports = userMD;