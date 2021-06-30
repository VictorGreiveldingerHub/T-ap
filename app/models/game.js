const CoreModel = require('./coreModel');

class Game extends CoreModel {
    
    static tableName = "game";
    
    title;
    category;
    description;
    color;
    rule;

    constructor(obj) {
        super(obj);
        
        this.title = obj.title;
        this.category = obj.category;
        this.description = obj.description;
        this.color = obj.color;
        this.rule = obj.rule;
    };
};

module.exports = Game; 