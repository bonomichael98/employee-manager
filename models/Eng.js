const Emp = require("./Emp");


class Eng extends Emp {

    constructor(id, alias, contact, git) {
        super(alias, id, contact);
        this.git = git;
    };

    findGithub() {
        return this.git;
    };

    findTitle() {
        return "Engineer";
    };
};

module.exports = Eng;