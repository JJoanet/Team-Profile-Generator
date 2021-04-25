const fs = require('fs');
const inquirer = require('inquirer');

const engineer = require('./engineer');
const manager = require('./manager');
const intern = require('./intern');

class Employee {
    constructor(employeeName, id, email) {
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
        // console.log(this.email,this.id,this.name)
    }
}

// function createEmployee(data){
//    const member =  new Employee(data);
// };

module.exports = Employee;
