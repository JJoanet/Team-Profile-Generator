const fs = require('fs');
const inquirer = require('inquirer');
const generateHtml = require('./lib/generatehtml');
const createManager = require('./lib/manager');
const createEngineer = require('./lib/engineer');
const createIntern = require('./lib/intern')

const team = new Array;
let pagenameResult;

const pageName = {
    type: 'input',
    name: 'title',
    message: `What is your team's name?`     
};

const newMember = {
    type: 'list',
    name: 'newMember',
    message: 'Would you like to add a team member?',
    choices: ['Yes', 'No'] 
};

const questions = [
    {
    type: 'input',
    name: 'name',
    message: `What this team members name?`
    },
    {
    type: 'input',
    name: 'id',
    message: `What is this team members ID?`
    },
    {
    type: 'input',
    name: 'email',
    message: `What is this team members email?`
    }
];

const role = {
    type: 'list',
    name: 'role',
    message: `What is this team members role?`,
    choices: ['Manager', 'Intern', 'Engineer']
}

const managerQuestions = [{
    type: 'input',
    name: 'number',
    message: 'What is this team members office number?'
}];

const engineerQuestions = [{
    type: 'input',
    name: 'github',
    message: `What is the engineer's Github username?`
}];

const internQuestions = [{
    type: 'input',
    name: 'school',
    message: `What is the intern's school?`
}];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => 
    error ? console.error(error) : console.log('success!')
)};

function init() {
    inquirer
        .prompt(pageName)
        .then((pageName) => {
            pagenameResult = pageName;
            teamAdd();
            return pagenameResult;
        });
}


function teamAdd() {
    inquirer
        .prompt(newMember)
        .then((newMember) => {
            if(newMember.newMember === 'Yes'){
                inquirer
                    .prompt(questions)
                    .then((questionResponse) => {
                        return roleSelected(questionResponse);
                    });
            } else if (newMember.newMember === "No") {
                let packagedData = {
                    title: pagenameResult,
                    team: team
                }
                writeToFile('./dist/index.html', generateHtml(packagedData));
            }
        })
}

function roleSelected(passData) {
    inquirer
        .prompt(role)
        .then((role) => {
            if(role.role == 'Manager'){
                inquirer
                    .prompt(managerQuestions)
                    .then((managerQuestions) => {
                        createManager(passData, managerQuestions);
                        const newManager = createManager(passData, managerQuestions)
                        team.push(newManager);
                        return teamAdd();
                    });
            } else if (role.role == 'Intern'){
                inquirer
                    .prompt(internQuestions)
                    .then((internQuestions) => {
                        createIntern(passData, internQuestions);
                        const newIntern = createIntern(passData, internQuestions)
                        team.push(newIntern);
                        return teamAdd();
                    });
            } else if (role.role == 'Engineer') {
                inquirer
                    .prompt(engineerQuestions)
                    .then((engineerQuestions) => {
                        createEngineer(passData, engineerQuestions);
                        const newEngineer = createEngineer(passData, engineerQuestions)
                        team.push(newEngineer);
                        return teamAdd();
                    });
            }
        })
};



init();