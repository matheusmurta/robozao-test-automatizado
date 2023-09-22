const puppeteer = require('puppeteer');
const assert = require('assert');

describe('Formulário de Cadastro', () => {
    let browser;
    let page;

    before(async () => {
        browser = await puppeteer.launch({ headless: false }); // Desativa o modo headless
        page = await browser.newPage();
        await page.goto('http://localhost:3000'); // Substitua pela URL do seu formulário
    });

    after(async () => {
        await browser.close();
    });

    it('Deve preencher e enviar o formulário', async () => {
        await page.type('#nome', 'Exemplo Nome');
        await page.type('#email', 'exemplo@email.com');
        await page.type('#telefone', '123456789');
        await page.type('#experiencia', 'Experiência de exemplo');

        await page.click('input[type="submit"]');

        await page.waitForSelector('.sucesso');

        const sucesso = await page.evaluate(() => {
            return document.querySelector('.sucesso').innerText;
        });

        assert.strictEqual(sucesso, 'Candidato cadastrado com sucesso!');
    });
});
