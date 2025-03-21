import { test, expect } from '@playwright/test';

test.describe('訂閱服務費用計算器', () => {
  test('應該能夠顯示主頁面', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('訂閱服務費用計算器')).toBeVisible();
  });

  test('應該能夠顯示預設訂閱服務', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Netflix 標準方案')).toBeVisible();
    await expect(page.getByText('串流影音')).toBeVisible();
  });

  test('應該能夠新增訂閱服務', async ({ page }) => {
    await page.goto('/');
    
    // 點擊新增按鈕
    await page.getByText('新增訂閱服務').click();
    
    // 填寫表單
    await page.getByLabel('訂閱服務名稱').fill('測試服務');
    await page.getByLabel('月費 (NT$)').fill('299');
    await page.getByLabel('類別').selectOption('streaming');
    
    // 提交表單
    await page.getByRole('button', { name: '新增訂閱' }).click();
    
    // 驗證新增的服務
    await expect(page.getByText('測試服務')).toBeVisible();
    await expect(page.getByText('NT$ 299')).toBeVisible();
  });

  test('應該能夠刪除訂閱服務', async ({ page }) => {
    await page.goto('/');
    
    // 新增一個服務
    await page.getByText('新增訂閱服務').click();
    await page.getByLabel('訂閱服務名稱').fill('要刪除的服務');
    await page.getByLabel('月費 (NT$)').fill('199');
    await page.getByLabel('類別').selectOption('streaming');
    await page.getByRole('button', { name: '新增訂閱' }).click();
    
    // 確認服務已新增
    await expect(page.getByText('要刪除的服務')).toBeVisible();
    
    // 刪除服務
    await page.getByRole('button', { name: '刪除' }).click();
    
    // 確認服務已刪除
    await expect(page.getByText('要刪除的服務')).not.toBeVisible();
  });

  test('應該能夠計算總費用', async ({ page }) => {
    await page.goto('/');
    
    // 新增兩個服務
    await page.getByText('新增訂閱服務').click();
    await page.getByLabel('訂閱服務名稱').fill('服務A');
    await page.getByLabel('月費 (NT$)').fill('100');
    await page.getByLabel('類別').selectOption('streaming');
    await page.getByRole('button', { name: '新增訂閱' }).click();
    
    await page.getByText('新增訂閱服務').click();
    await page.getByLabel('訂閱服務名稱').fill('服務B');
    await page.getByLabel('月費 (NT$)').fill('200');
    await page.getByLabel('類別').selectOption('streaming');
    await page.getByRole('button', { name: '新增訂閱' }).click();
    
    // 驗證月費總計
    await expect(page.getByText('NT$ 300')).toBeVisible();
    
    // 驗證年費總計（300 * 12 = 3,600）
    await expect(page.getByText('NT$ 3,600')).toBeVisible();
  });
}); 