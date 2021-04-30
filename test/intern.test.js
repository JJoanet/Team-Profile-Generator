const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Create', () => {
        it('Should create a add Intern role and github username', () => {
            
            const result = new Intern.Intern("John Doe", "01", "JDoe@gmail.com", "App State", "Intern");

            expect(result).toEqual({
                employeeName: "John Doe", 
                id: "01",
                email: "JDoe@gmail.com",
                school: "App State",
                role: "Intern"
            });
        });
    });
});
