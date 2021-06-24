const CoreModel = require('./coreModel');

class Theme extends CoreModel {

    title;
    color;

    constructor(obj) {
        super(obj);
        
        this.title = obj.title;
        this.color = obj.color;
    };
};

module.exports = Theme; 