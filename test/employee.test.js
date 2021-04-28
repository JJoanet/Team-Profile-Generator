const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Create', () => {
        it('Should create a new Employee', () => {

            const result = new Employee("Matt Reisdorf","01","mreisdorf9717@gmail.com");
            
            expect(result).toEqual({employeeName: 'Matt Reisdorf', id: '01', email: 'mreisdorf9717@gmail.com'});
        });
    });
});