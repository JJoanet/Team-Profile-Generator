const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Create', () => {
        it('Should create a add Manager role and github username', () => {
            
            const result = new Manager.Manager("John Doe", "01", "JDoe@gmail.com", "42069", "Manager");

            expect(result).toEqual({
                employeeName: "John Doe", 
                id: "01",
                email: "JDoe@gmail.com",
                number: "42069",
                role: "Manager"
            });
        });
    });
});
