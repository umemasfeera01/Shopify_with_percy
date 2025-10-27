
import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';

test('Shopify Homepage visual test', async ({ page }) => {
  await page.goto('https://thapas-technical.myshopify.com/products/black-t-shirt');
  await percySnapshot(page, 'ProductInfo');  // Takes a screenshot for Percy
});
