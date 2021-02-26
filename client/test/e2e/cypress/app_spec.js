const PAGE_URL = 'http://localhost:3000';

const testLogin = 'tester';
const testLoginIncorrect = 'alex';
const testName = 'Tester';

describe('Coin test', () => {
    it('visits home page', () => {
        cy.visit(PAGE_URL);
        cy.get('#home-greeting').should('be.visible');
        cy.get('#home-greeting').should('contain', 'Войдите или зарегистрируйтесь')
    })

    it ('logs in successfully', () => {
        cy.visit(PAGE_URL + '/authorize');
        cy.get('#App-header-link-auth').click();
        cy.get('#greeting').should('contain', `Войдите или зарегистрируйтесь`);
        cy.get('#authorization-login').type(testLogin);
        cy.get('#authorization-button').click();
        cy.get('#greeting').should('contain', `Привет, ${testName}!`);
    })

    it ('logs out successfully', () => {
        cy.visit(PAGE_URL + '/authorize');
        cy.get('#App-header-link-auth').click();
        cy.get('#greeting').should('contain', `Войдите или зарегистрируйтесь`);
        cy.get('#authorization-login').type(testLoginIncorrect);
        cy.get('#authorization-button').click();
        cy.get('#App-header-button').should('contain', `Выход`);
        cy.get('#App-header-button').click();
        cy.get('#App-header-link-auth').should('contain', `Вход`);
    })

    it ('home page of user should contain link to barmen', () => {
        cy.visit(PAGE_URL);
        cy.get('#home-greeting').should('contain', `Войдите или зарегистрируйтесь`);
        cy.get('#App-header-link-auth').click();
        cy.get('#authorization-login').type(testLogin);
        cy.get('#authorization-button').click();
        cy.get('#App-header-link').click();
        cy.get('#home-greeting').should('contain', `Привет, ${testName}!`);
        cy.get('#link-to-barmen').should('contain', 'Мой Рейтинг');
    })

    it ('home page of user should contain link to barmen', () => {
        cy.visit(PAGE_URL);
        cy.get('#home-greeting').should('contain', `Войдите или зарегистрируйтесь`);
        cy.get('#App-header-link-auth').click();
        cy.get('#authorization-login').type(testLogin);
        cy.get('#authorization-button').click();
        cy.get('#App-header-link').click();
        cy.get('#link-to-barmen').click();
        cy.get('#barmen-amount').should('contain', '0 / 30');
    })
})