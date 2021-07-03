const userRoleMD = (req, res, next) => {
    if (req.session.user.role === "admin") {
        next();
    } else {
        // on render une page 401 ! Unauthorized
        res.status(401).render('401');
    }
};

module.exports = userRoleMD;