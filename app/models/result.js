const CoreModel = require('./coreModel');

class Result extends CoreModel {

    game_title;
    date;
    point;
    game_id;
    user_id;

    constructor(obj) {
        super(obj);
        
        this.game_title = obj.game_title;
        this.date = obj.date;
        this.point = obj.point;
        this.game_id = obj.game_id;
        this.user_id = obj.user_id;
    };
};

module.exports = Result; 