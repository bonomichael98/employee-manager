//add templates for each
let createMan = man => {
    return `
        <div class="container employee-side">
            <div class="row">
                <div class="d-flex justify-content-center">
                    <div>
                        <div class="justify-content-center">
                            <h2>${man.findAlias()}</h2>
                            <h3>${man.findTitle()}</h3>
                        </div>
                        <div>
                            <ul>
                                <li>ID: ${man.findId()}</li>
                                <li>Email: ${man.findContact()}</li>
                                <li>Office ${man.findNum()}: </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
}
let createEng = eng => {
    return `
        <div class="container employee-side">
            <div class="row">
                <div class="d-flex justify-content-center">
                    <div>
                        <div class="justify-content-center">
                            <h2>${eng.findAlias()}</h2>
                            <h3>${eng.findTitle()}</h3>
                        </div>
                        <div>
                            <ul>
                                <li>ID: ${eng.findId()}</li>
                                <li>Email: ${eng.findContact()}</li>
                                <li>Office ${eng.findGithub()}: </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
}
let createInt = int => {
    return `
        <div class="container employee-side">
            <div class="row">
                <div class="d-flex justify-content-center">
                    <div>
                        <div class="justify-content-center">
                            <h2>${int.findAlias()}</h2>
                            <h3>${int.findTitle()}</h3>
                        </div>
                        <div>
                            <ul>
                                <li>ID: ${int.findId()}</li>
                                <li>Email: ${int.findContact()}</li>
                                <li>Office ${int.findEdu()}: </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
};

//export html for input data
module.exports = emps => {
    const manager = emps.filter(man => {
        if (man.findTitle() === 'Manager') {
            return true;
        } else {
            return false;
        }
    })
    const engineer = emps.filter(eng => {
        if (eng.findTitle() === 'Engineer') {
            return true;
        } else {
            return false;
        }
    })
    const intern = emps.filter(int => {
        if (int.findTitle() === 'Intern') {
            return true;
        } else {
            return false;
        }
    })

    return `
    <!DOCTYPE html>
    <head>

    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">

    <title>Employees</title>

    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="justify-content-center">
                    <h1 class="text-center">Employees</h1>
                </div>
            </div>
        </div>
        ${manager.map(createMan)}
        ${engineer.map(createEng)}
        ${intern.map(createInt)}

    </body>

    </html>
    `
};

