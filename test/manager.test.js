const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Create', () => {
        it('Should create a add Manager role and github username', () => {
            
            const result = new Manager.Manager("Matt Reisdorf", "01", "mreisdorf9717@gmail.com", "42069", "Manager");

            expect(result).toEqual({
                employeeName: "Matt Reisdorf", 
                id: "01",
                email: "mreisdorf9717@gmail.com",
                number: "42069",
                role: "Manager"
            });
        });
    });
});