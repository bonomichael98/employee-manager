let createPage = data => {
    `<!DOCTYPE html>
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
        ${data}
    </body>

</html>
`
}

module.exports = { createPage }