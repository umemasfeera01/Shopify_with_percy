import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';

test('Shopify Homepage visual test', async ({ page }) => {
  await page.goto('https://thapas-technical.myshopify.com/checkouts');
  await percySnapshot(page, 'Homepage');  // Takes a screenshot for Percy
});
