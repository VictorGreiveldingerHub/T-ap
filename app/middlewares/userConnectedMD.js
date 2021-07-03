const userConnectedMD = (req, res, next) => {
    // Si l'utilisateur est connecté tu passes
    if (req.session.user) {
        next();
    } else {
        // Sinon je redirige vers /login
        res.redirect('/login');
    };
};

module.exports = userConnectedMD;