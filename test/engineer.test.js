const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Create', () => {
        it('Should create a add Engineer role and github username', () => {
            
            const result = new Engineer.Engineer("John Doe", "01", "JDoe@gmail.com", "JDoe", "Engineer");

            expect(result).toEqual({
                employeeName: "John Doe", 
                id: "01",
                email: "JDoe@gmail.com",
                githubRepo: "JDoe",
                role: "Engineer"
            });
        });
    });
});
