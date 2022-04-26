const puppeteer = require('puppeteer');
console.log('bem vindo ao bot conversor');
const senha =  '270616';
const cpf =  '00747691208';
var rep = '1';




(async () => {
  const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null
    });
  const page = await browser.newPage();
  //await page.setViewport({ width: 1024, height: 800});

    await page.goto('https://www.vivo.com.br/para-voce');
    await page.waitFor('a[title="São Paulo - SP"]');
    await page.click('a[title="São Paulo - SP"]');
    await page.waitFor(4000);
    await page.waitFor('a[class="main-menu__login__user"]');
    await page.click('a[class="main-menu__login__user"]');
    await page.waitFor(9000);
    await page.waitFor('input[class="form__input__value"]');
    await page.type('input[class="form__input__value"]', cpf, {delay:150});
    await page.type('input[type="password"]', senha, {delay:10});
    await page.click('[type="submit"]');
    await page.click('[type="submit"]');
    await page.waitFor(15000);
    await page.goto('https://meuvivo.vivo.com.br/content/vivo/meu-vivo/pacotes-adicionais.html');
    await page.waitFor(10000);

    while (rep <= 25) {
    await page.waitFor('[name="400 MB"]');
    await page.click('[name="400 MB"]');
    await page.waitFor(100);
    await page.waitFor('[class="fe-txt-align-center fe-ft-weight-500 fe-indigo fe-confirmar-vivo-travel"]');
    await page.click('[class="fe-txt-align-center fe-ft-weight-500 fe-indigo fe-confirmar-vivo-travel"]');
    await page.waitFor('[id="purchasePackage_okButton"]');
    await page.click('[id="purchasePackage_okButton"]');
    await page.waitFor(100);
    rep++;
}
    
  
})();