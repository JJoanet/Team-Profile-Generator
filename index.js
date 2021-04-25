const fs = require('fs');
const inquirer = require('inquirer');
const generateHtml = require('./lib/generatehtml');
const createManager = require('./lib/manager');


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

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => 
    error ? console.error(error) : console.log('success!')
)};

function init() {
    inquirer
        .prompt(pageName)
        .then((pageName) => {
            writeToFile('index.html', generateHtml(pageName));
            teamAdd();
        });
}

function teamAdd() {
    inquirer
        .prompt(newMember)
        .then((newMember) => {
            if(newMember.newMember === 'Yes'){
                inquirer
                    .prompt(questions)
                    .then((questions) => {
                        roleSelected(questions);
                        return questions;
                    });
            }
        })
}

function roleSelected() {
    inquirer
        .prompt(role)
        .then((role) => {
            if(role.role == 'Manager'){
                inquirer
                    .prompt(managerQuestions)
                    .then((questions, managerQuestions) => {
                        createManager(questions, managerQuestions);
                        teamAdd();

                    });
            } else if (role.role == 'Intern'){
                inquirer
                    .prompt(managerQuestions)
                    .then((internQuestions) => {
                        teamAdd();
                    });
            } else if (role.role == 'Engineer') {
                inquirer
                    .prompt(managerQuestions)
                    .then((engineerQuestions) => {
                        teamAdd();
                    });
            }
        })
};

init();