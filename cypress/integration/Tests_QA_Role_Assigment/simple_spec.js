describe('My First Test', function() {
    it('Visits the github', function() {
        //cy.clearLocalStorage()
        // Login in github with your account
        cy.visit('https://github.com/login')
        cy.get('#login_field')
            .type('daria.zablodska@gmail.com')
        cy.get('#password')
            .type('Test1234')
        cy.get('input[type="submit"]').click()
        cy.get('#user-links img.avatar').should('have.attr', 'alt', '@dzablodska')

        //Create github repository
        cy.get('.btn.btn-sm.btn-primary.text-white').click()
        cy.get('#repository_name')
            .type('Test_repo')

        //Create README.md file in repository and commit&push it via Github UI
        cy.get('#repository_auto_init').click()
        cy.get('.btn.btn-primary.first-in-line').click()
        cy.url().should('eq', 'https://github.com/dzablodska/Test_repo')
        cy.get('table.files').contains('README.md')
            .should('have.attr', 'href', '/dzablodska/Test_repo/blob/master/README.md')
        cy.get('ul.numbers-summary').contains('commit')
            .should('have.attr', 'href', '/dzablodska/Test_repo/commits/master')

        //Delete repository
        cy.get('a[href="/dzablodska/Test_repo/settings"]').click()
        cy.get('div.Box--danger > ul > li:nth-child(4) summary').click()
        cy.get('input[name="verify"]:visible').click()
        .type('Test_repo')
        cy.get('form[action="/dzablodska/Test_repo/settings/delete"] button.btn-danger[type="submit"][data-disable-invalid]').click()
        cy.get('ul[data-filterable-type="substring"]').contains('Test_repo')
            .should('not.have.attr', 'href', '/dzablodska/Test_repo')



    })
})


