const fs = require("fs");
const inquirer = require("inquirer");

const path = require("path");

const Employee = require("./models/Emp");

const Eng = require("./models/Eng");
const Int = require("./models/Int");
const Man = require("./models/Man");  

const createPage = require('./templates/empstemp');

const allEmps = [];

const addManager = () => {
    //generate manager information
    console.log(`
    Input Manager 
    `);
    return inquirer.prompt([
        {
            type:'input',
            name: 'alias',
            message: 'Input managers name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Input managers ID'
        },
        {
            type: 'input',
            name: 'contact',
            message: 'Input managers email'
        },
        {
            type: 'input',
            name: 'num',
            message: "Input manager's office number"
        }
    ])
    .then(manData => {
        const manager = new Man(
            manData.alias, 
            manData.id, 
            manData.contact,
            manData.num
            )
        allEmps.push(manager);
        console.log('New manager created...');
    });
};

const addEngineer = () => {
    //generate manager information
    console.log(`
    Input Engineer 
    `);
    return inquirer.prompt([
        {
            type:'input',
            name: 'alias',
            message: 'Input engineers name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Input engineers ID'
        },
        {
            type: 'input',
            name: 'contact',
            message: 'Input managers email'
        },
        {
            type: 'input',
            name: 'git',
            message: "Input manager's office number"
        }
    ])
    .then(engData => {
        const engineer = new Eng(
            engData.alias, 
            engData.id, 
            engData.contact,
            engData.git
            )
        allEmps.push(engineer);
        console.log('New engineer created...');
    });
};

const addIntern = () => {
    //generate manager information
    console.log(`
    Input Manager 
    `);
    return inquirer.prompt([
        {
            type:'input',
            name: 'alias',
            message: 'Input intern name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Input intern ID'
        },
        {
            type: 'input',
            name: 'contact',
            message: 'Input intern email'
        },
        {
            type: 'input',
            name: 'edu',
            message: "Input intern's college"
        }
    ])
    .then(intData => {
        const intern = new Int(
            intData.alias, 
            intData.id, 
            intData.contact,
            intData.edu
            )
        allEmps.push(intern);
        console.log('New manager created...');
    });
};

const promptLoop = () => {
    return inquirer.prompt({
        type: 'list',
        name: 'selectedType',
        message: 'Select type of employee',
        choices: ['Engineer', 'Intern', 'Exit']
    }).then((answers) => {
        if(answers.selectedType === 'Engineer') {
            return addEngineer().then(promptLoop);
        } else if(answers.selectedType === 'Intern') {
            return addIntern().then(promptLoop);
        }
    })
}

addManager().then(promptLoop)
.then(() => {
    fs.writeFileSync('index.html', createPage(allEmps));
    //console.log(createPage(allEmps))
});

//const addEmps = 