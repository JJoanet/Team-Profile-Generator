function populateCards(teamData) {
    let template = "";
    for( i = 0; i < teamData.team.length; i++){
        let currentMember = teamData.team[i];
        if(currentMember.role == 'Manager'){
            template += `
            <div class="card col-sm-12 col-md-5 col-lg-3 mx-3 my-3" style="width: 18rem;">
                <div class="card-header text-center row">
                    <h1 class = "col-sm-12">${currentMember.employeeName}</h1>
                    <h2 class = "col-sm-12">${currentMember.role}</h2>
                </div>
                <div class="row col-sm-12 justify-content-center my-3 mx-auto teamList text-center">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${currentMember.id}</li>
                        <li class="list-group-item">Employee Email: <a href = "mailto: ${currentMember.email}">${currentMember.email}</a></li>
                        <li class="list-group-item">Manager's office number: ${currentMember.number.number}</li>
                    </ul>
                </div>
            </div>`;
        } else if(currentMember.role == 'Intern'){
            template += `
            <div class="card col-sm-12 col-md-5 col-lg-3 mx-3 my-3" style="width: 18rem;">
                <div class="card-header text-center row">
                    <h1 class = "col-sm-12">${currentMember.employeeName}</h1>
                    <h2 class = "col-sm-12">${currentMember.role}</h2>
                </div>
                <div class="row col-sm-12 justify-content-center my-3 mx-auto teamList text-center">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${currentMember.id}</li>
                        <li class="list-group-item">Employee Email: <a href = "mailto: ${currentMember.email}">${currentMember.email}</a></li>
                        <li class="list-group-item">Employee's school: ${currentMember.school.school}</li>
                    </ul>
                </div>

            </div>`;
        } else if(currentMember.role == 'Engineer'){
            template += `
            <div class="card col-sm-12 col-md-5 col-lg-3 mx-3 my-3" style="width: 18rem;">
                <div class="card-header text-center row">
                    <h1 class = "col-sm-12">${currentMember.employeeName}</h1>
                    <h2 class = "col-sm-12">${currentMember.role}</h2>
                </div>
                <div class="row col-sm-12 justify-content-center my-3 mx-auto teamList text-center">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${currentMember.id}</li>
                        <li class="list-group-item">Employee Email: <a href = "mailto: ${currentMember.email}">${currentMember.email}</a></li>
                        <li class="list-group-item">Employee Github: <a href = "https://github.com/${currentMember.githubRepo.github}" target="_blank">${currentMember.githubRepo.github}</a></li>
                    </ul>
                </div>
            </div>`;
        }
    }
    return template;
}

function generateHtml(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid" id="header">
            <div class="container">
                <h1 class="display-4 text-center">${data.title}</h1>
            </div>
        </div>  
        
        <div class = "row mx-auto justify-content-center col-sm-12">
        ${populateCards(data)}
        </div>

        <script src="index.js"></script>
    </body>
    </html>`
}




module.exports = generateHtml;