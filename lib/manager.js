const Employee = require('./employee');

class Manager extends Employee {
    constructor(employeeName, id, email, managerData, role = "Manager") {
        super(employeeName, id, email)
        
        this.number = managerData;
        this.role = role;
    }
}

function createManager(questions, managerQuestions) {
    let employeeName = questions.name;
    let id = questions.id;
    let email = questions.email;
    const manager = new Manager(employeeName, id, email, managerQuestions);
    return manager;
};

module.exports = {
    createManager: createManager,
    Manager: Manager
};