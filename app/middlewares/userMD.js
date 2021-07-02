// MD : pour tester la présence d'un user en session et de transmettre à res.locals l'info
const userMD = (req, res, next) => {
    if (req.session.user) {
        res.locals.user = req.session.user;
    } else {
        res.locals.user = false;
    };
    next();
};

module.exports = userMD;