import { test, expect } from '@playwright/test';
/*Sửa file tests/example.spec.ts để thực hiện yêu cầu sau:
○ Đối với test has title:
■ Đi tới trang https://e-commerce-dev.betterbytesvn.com/
■ Verify title chứa text: “E-commerce site for automation
testing”*/
test('has title', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/E-commerce site for automation testing/);
});

/*Sửa file tests/example.spec.ts để thực hiện yêu cầu sau:
○ Đối với test get started link:
■ Đi tới trang https://e-commerce-dev.betterbytesvn.com/
■ Click vào menu “My account”
■ Verify heading chứa text “My account” xuất hiện.*/

test('get started link', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'My account' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
});
