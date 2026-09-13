import { chromium } from '@playwright/test';
const browser = await chromium.launch();

for (const mode of ['light', 'dark']) {
  const page = await browser.newPage({ viewport: { width: 1400, height: 500 } });
  await page.addInitScript((m) => window.localStorage.setItem('theme', m), mode);
  await page.goto('http://localhost:8080', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await page.screenshot({ path: `/tmp/site-check/mark-${mode}.png` });
  await page.close();
}
await browser.close();
