const Employee = require('./employee');

class Intern extends Employee {
    constructor(employeeName, id, email, internData, role = 'Intern') {
        super(employeeName, id, email)

        this.school = internData;
        this.role = role;
    }
}

function createIntern(questions, internQuestions){
    let employeeName = questions.name;
    let id = questions.id;
    let email = questions.email; 
    const intern = new Intern(employeeName, id, email, internQuestions);
    return intern;
};

module.exports = {
    createIntern: createIntern,
    Intern: Intern
};