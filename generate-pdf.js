const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const reportPath = path.resolve(__dirname, 'mochawesome-report/mochawesome.html');
  await page.goto(`file://${reportPath}`, { waitUntil: 'networkidle0' });
  await page.pdf({ path: 'test-report.pdf', format: 'A4' });
  await browser.close();
})();