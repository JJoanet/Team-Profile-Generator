const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Create', () => {
        it('Should create a add Engineer role and github username', () => {
            
            const result = new Engineer.Engineer("Matt Reisdorf", "01", "mreisdorf9717@gmail.com", "MReisdorf", "Engineer");

            expect(result).toEqual({
                employeeName: "Matt Reisdorf", 
                id: "01",
                email: "mreisdorf9717@gmail.com",
                githubRepo: "MReisdorf",
                role: "Engineer"
            });
        });
    });
});