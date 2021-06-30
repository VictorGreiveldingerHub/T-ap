const CoreModel = require('./coreModel');

class Difficulty extends CoreModel {

    static tableName = "difficulty";
    
    title;
    color;
    coefficient;

    constructor(obj) {
        super(obj);
        
        this.title = obj.title;
        this.color = obj.color;
        this.coefficient = obj.coefficient;
    };
};

module.exports = Difficulty; 