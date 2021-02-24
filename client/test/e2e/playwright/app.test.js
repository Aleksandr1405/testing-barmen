const playwright = require('playwright');

const PAGE_URL = 'http://localhost:3000';
const delay = ms => new Promise(res => setTimeout(res, ms));

describe(`UI Tests with Playwright`, () => {
    let browser = null;
    let page = null;
    const testLogin = 'tester';
    const testName = 'TESTER';

    beforeAll(async () => {
        browser = await playwright['chromium'].launch();
        page = await browser.newPage();

        if (!page) {
            throw new Error("Connection wasn't established");
        }

        await page.goto(PAGE_URL);
    });

    afterAll(async () => {
        await browser.close();
    });

    test(`Should load page`, async () => {
        expect(page).not.toBeNull();
        expect(await page.title()).not.toBeNull();
    });

    test('Should log in', async () => {
        await page.goto(PAGE_URL + '/authorize');
        await page.fill('#authorization-login', testLogin);
        await page.click('#authorization-button');
        await delay(100);

        expect(await page.innerText('#greeting')).toBe(`ПРИВЕТ, ${testName}!`)
    })

    test('Home page personalized for authorized user', async () => {
        await page.goto(PAGE_URL)
        expect(await page.innerText('#home-greeting')).toBe('ВОЙДИТЕ ИЛИ ЗАРЕГИСТРИРУЙТЕСЬ')

        await page.goto(PAGE_URL + '/authorize');
        await page.fill('#authorization-login', testLogin);
        await page.click('#authorization-button');

        await page.click('#App-header-link')
        await delay(100);

        expect(await page.innerText('#home-greeting')).toBe(`ПРИВЕТ, ${testName}!`)
        expect(await page.innerText('#link-to-barmen')).toBe('МОЙ РЕЙТИНГ')

    })
});
