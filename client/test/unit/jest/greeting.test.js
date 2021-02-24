const greet = require('../../../src/utils/greeting')

describe('testing greeting',  () => {
    it('greet guest', () => {
        expect(greet('')).toBe('Войдите или зарегистрируйтесь');
    })

    it('greet Karl', () => {
        expect(greet('Вика')).toBe('Привет, Вика!');
    })
})
