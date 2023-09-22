const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000'); // Substitua pela URL do seu formulário

  // Realize as ações que você deseja testar aqui
  await page.type('#nome', 'Exemplo Nome');
  await page.type('#email', 'exemplo@email.com');
  await page.type('#telefone', '123456789');
  await page.type('#experiencia', 'Experiência de exemplo');

  // Clique no botão de envio do formulário
  await page.click('input[type="submit"]');

  // Aguarde até que um elemento específico seja visível (ou o tempo que desejar)
  await page.waitForSelector('.sucesso');

  // Mantenha o navegador aberto
  await page.waitFor(0); // Aguarda por 0 milissegundos (ou seja, indefinidamente)

  await browser.close();
})();
