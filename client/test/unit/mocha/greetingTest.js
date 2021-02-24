const greet = require('../../../src/utils/greeting')

const chai = require('chai');

describe('greeting test', () => {
    it('greet ', () => {
        greet('').should.be.equal('Войдите или зарегистрируйтесь');
    })
    it('greet Test', () => {
        greet('Test').should.be.equal('Привет, Test!');
    })
})