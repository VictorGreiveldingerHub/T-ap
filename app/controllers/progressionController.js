const dataMapper = require('../dataMapper');

const progressionController = {
    progresPage: (req, res) => {
        dataMapper.getAllResults((err, data) => {
            if (err) {
                console.trace(err);
                res.status(500).render('500');
            } else {
                console.log(data.rows);
                res.render('progression', {
                    results : data.rows,
                });
            };
        });
    }
};

module.exports = progressionController;