// Dependencies and Imports
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./lib/generateHTML');
const createManager = require('./lib/manager');
const createEngineer = require('./lib/engineer');
const createIntern = require('./lib/intern');

// Initialize some Variables
const team = [];


// Questions for Inquirer
const pageName = {
    type: 'input',
    name: 'title', 
    message: 'What is the team or project name?'
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
        message: `What is this team member's name?`
    },
    {
        type: 'input', 
        name: 'id',
        message: `What is this team member's id?`
    },
    {
        type: 'input',
        name: 'email',
        message: `What is this team member's email address?`
    }
];

const role = {
    type: 'list',
    name: 'role',
    message: `What is this their role?`,
    choices: ['Manager', 'Engineer', 'Intern']
};

const managerQuestions = {
    type: 'input',
    name: 'number', 
    message: `What is this manager's office number?`
};

const engineerQuestions = {
    type: 'input',
    name: 'github',
    message: `What is this engineer's Github username?`
};

const internQuestions = {
    type: 'input',
    name: 'school',
    message: 'What school does the intern currently attend?'
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
    error ? console.error(error) : console.log('Success')
    );
};

function init(team) {
    inquirer 
        .prompt(pageName)
        .then((pageName) => {
            const pagenameResult = pageName.title;
            console.log(pagenameResult, 'im on line 82');
            teamAdd(pagenameResult, team);
        });
}


function teamAdd(pagenameResult, team) {
    inquirer
        .prompt(newMember)
        .then((newMember) => {
            if(newMember.newMember === 'Yes') {
                inquirer
                    .prompt(questions)
                    .then((questionResponse) => {
                        return roleSelected(pagenameResult, questionResponse);
                    });
            }
            else if (newMember.newMember === 'No') {
                let packagedData = {
                    title: pagenameResult,
                    team: team
                }
                writeToFile('./dist/index.html', generateHTML(packagedData));
            }
        });
};

function roleSelected(pagenameResult, passData) {
    inquirer   
        .prompt(role)
        .then((role) => {
            if (role.role == 'Manager'){
                inquirer
                    .prompt(managerQuestions)
                    .then((managerQuestions) => {
                        const newManager = createManager.createManager(passData, managerQuestions)
                        team.push(newManager);
                        return teamAdd(pagenameResult, team);
                    });
            } 
            else if (role.role == 'Intern'){
                inquirer
                    .prompt(internQuestions)
                    .then((internQuestions) => {
                        const newIntern = createIntern.createIntern(passData, internQuestions)
                        team.push(newIntern);
                        return teamAdd(pagenameResult, team);
                    });
            } 
            else if (role.role == 'Engineer') {
                inquirer
                    .prompt(engineerQuestions)
                    .then((engineerQuestions) => {
                        const newEngineer = createEngineer.createEngineer(passData, engineerQuestions)
                        team.push(newEngineer);
                        return teamAdd(pagenameResult, team);
                    });
            }
              
    });
};


init(team);