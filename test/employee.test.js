const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Create', () => {
        it('Should create a new Employee', () => {

            const result = new Employee("John Doe","01","JDoe@gmail.com");
            
            expect(result).toEqual({employeeName: 'John Doe', id: '01', email: 'JDoe@gmail.com'});
        });
    });
});
