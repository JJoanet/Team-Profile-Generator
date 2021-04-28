const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Create', () => {
        it('Should create a add Intern role and github username', () => {
            
            const result = new Intern.Intern("Matt Reisdorf", "01", "mreisdorf9717@gmail.com", "App State", "Intern");

            expect(result).toEqual({
                employeeName: "Matt Reisdorf", 
                id: "01",
                email: "mreisdorf9717@gmail.com",
                school: "App State",
                role: "Intern"
            });
        });
    });
});