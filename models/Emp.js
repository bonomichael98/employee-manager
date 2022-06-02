class Emp {

    constructor(id, alias, contact) {
        this.id = id;

        this.alias = alias;

        this.contact = contact;
    };

    findId() {
        return this.id;
    };

    findAlias() {
        return this.alias;
    };

    findContact() {
        return this.contact;
    };

    findTitle() {
        return "Employee";
    };
    

};

module.exports = Emp;