const { ModuleMocker } = require('jest-mock');
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(employeeName, id, email, engineerData, role = 'Engineer') {
        super(employeeName, id, email)

        this.githubRepo = engineerData;
        this.role = role;
    }
}

function createEngineer(questions, engineerQuestions){
    let employeeName = questions.name;
    let id = questions.id;
    let email = questions.email; 
    const engineer = new Engineer(employeeName, id, email, engineerQuestions);
    return engineer;
};


module.exports = {
    createEngineer: createEngineer,
    Engineer: Engineer
};