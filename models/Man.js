const Emp = require("./Emp");


class Man extends Emp {

    constructor(id, alias, contact, num) {
        super(alias, id, contact);
        this.num = num;
    };

    findNum() {
        return this.num;
    };

    findTitle() {
        return "Manager";
    };
    

};

module.exports = Man;