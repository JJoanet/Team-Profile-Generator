const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./employee');

class Manager extends Employee {
    constructor(employeeName, id, email, managerData) {
        super(employeeName, id, email)
        this.employeeName = employeeName;
        this.id = id;
        this.email = email

        this.number = managerData;
    }
}

function createManager(questions, managerQuestions){
    let employeeName = questions.name;
    let id = questions.id;
    let email = questions.email; 
    const manager = new Manager(employeeName, id, email, managerQuestions);
    return manager, console.log(manager);
};


module.exports = createManager;