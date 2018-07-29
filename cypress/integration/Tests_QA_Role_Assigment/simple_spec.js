describe('My First Test', function() {
    it('Visits the github', function() {
        cy.clearLocalStorage()
        // Login in github with your account
        cy.visit('https://github.com/login')
        cy.get('#login_field')
            .type('daria.zablodska@gmail.com')
            .should('have.value', 'daria.zablodska@gmail.com')
        cy.get('#password')
            .type('Test1234')
            .should('have.value', 'Test1234')
        cy.get('input[type="submit"]').click()
        cy.get('#user-links img.avatar').should('have.attr', 'alt', '@dzablodska')

        //Create github repository
        cy.get('.btn.btn-sm.btn-primary.text-white').click()
        cy.get('#repository_name')
            .type('Test_repo')
            .should('have.value', 'Test_repo')
        cy.get('.btn.btn-primary.first-in-line').click()

       //Create README.md file in repository and commit&push it via Github UI
        //Delete repository
        cy.get('a[href="/dzablodska/Test_repo/settings"]').click()
        cy.get('div.Box--danger > ul > li:nth-child(4) summary').click()
        cy.get('input[name="verify"]:visible').click()
        .type('Test_repo')
        cy.get('form[action="/dzablodska/Test_repo/settings/delete"] button.btn-danger[type="submit"][data-disable-invalid]').click()


    })
})


