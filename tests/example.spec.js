// @ts-check
import { test, expect } from '@playwright/test';

test('Home loads and renders first cocktails', async ({ page }) => {
  await page.goto('https://drinkifyyy.vercel.app');

  await page.waitForResponse(res => {
    return res.url().includes('cocktails') && res.status() === 200;
  });

  const cards = page.locator('.cocktails-list-item');
  await expect(cards.first()).toBeVisible();

  const count = await cards.count();
  expect(count).toBeGreaterThan(8);

  const first = cards.first();
  const img = first.getByTestId('cocktail-image');
  await expect(img).toBeVisible();
  await expect(img).toHaveAttribute('src', /.+/);
});
