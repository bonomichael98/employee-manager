const Emp = require("./Emp");


class Int extends Emp {
        constructor(id, alias, contact, edu) {
            super(alias, id, contact);
            this.edu = edu;
        };
    
        findEdu() {
            return this.edu;
        };
    
        findTitle() {
            return "Intern";
        };
    };

module.exports = Int;