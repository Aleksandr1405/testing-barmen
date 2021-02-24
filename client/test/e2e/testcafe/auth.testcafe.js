import { Selector } from 'testcafe';

fixture `auth`
    .page `http://localhost:3000/authorize`;

test('Greet', async t => {
    await t
        .click('main .App-form_input')
        .typeText('main .App-form_input', 'vika2506')
        .click(Selector('main button').withText('ВОЙТИ'))
        .expect(Selector('main div').withText('Привет, Вика Черноокая!').nth(2).innerText).eql("Привет, Вика Черноокая!");
});