import { Selector } from 'testcafe';

fixture `homePage`
    .page `http://localhost:3000`;

test('home', async t => {
    await t
        .expect(Selector('header a').withText('КАРТОЧКА БАРМЕНА').innerText).eql("КАРТОЧКА БАРМЕНА")
        .expect(Selector('header a').withText('КАРТОЧКА БАРМЕНА').visible).eql(true)
        .expect(Selector('header a').withText('ВХОД').innerText).eql("ВХОД")
        .expect(Selector('main div').withText('ВОЙДИТЕ ИЛИ ЗАРЕГИСТРИРУЙТЕСЬ').nth(2).innerText).eql("ВОЙДИТЕ ИЛИ ЗАРЕГИСТРИРУЙТЕСЬ");
});

test('rating', async t => {
    await t
        .expect(Selector('main div').withText('ВОЙДИТЕ ИЛИ ЗАРЕГИСТРИРУЙТЕСЬ').nth(2).innerText).eql("ВОЙДИТЕ ИЛИ ЗАРЕГИСТРИРУЙТЕСЬ")
        .click(Selector('header a').withText('ВХОД'))
        .typeText('main .App-form_input', 'vika2506')
        .click(Selector('main button').withText('ВОЙТИ'))
        .expect(Selector('header button').withText('ВЫХОД').innerText).eql("ВЫХОД")
        .click(Selector('header a').withText('КАРТОЧКА БАРМЕНА'))
        .expect(Selector('main a').withText('МОЙ РЕЙТИНГ').innerText).eql("МОЙ РЕЙТИНГ")
        .click(Selector('main a').withText('МОЙ РЕЙТИНГ'))
        .expect(Selector('main div').withText('15 / 30').nth(1).innerText).eql("15 / 30");
});

test('screen', async t => {
    await t
        .takeScreenshot();
});