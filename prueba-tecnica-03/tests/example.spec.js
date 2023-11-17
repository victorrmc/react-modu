// @ts-check
import { test, expect } from '@playwright/test'
const URL_CAT = 'http://localhost:5173/'
test('Checking that have text and image', async ({ page }) => {
  await page.goto(URL_CAT);
  const p = await page.getByRole('paragraph')
  const image = await page.getByRole('img')
  
  const textContext = await p.textContent()
  const imgScr = await image.getAttribute('src')
  
  await expect(textContext?.length).toBeGreaterThan(0)
  await expect(imgScr?.length).toBeGreaterThan(0)

});

test('Checking that have different text and image when click the button', async ({ page }) => {
  await page.goto(URL_CAT);
  const p = await page.getByRole('paragraph')
  const image = await page.getByRole('img')
  const textContext = await p.textContent()
  const imgScr = await image.getAttribute('src')
  const button = await page.getByRole('button').click();
  await page.waitForTimeout(3000);
  const p2 = await page.getByRole('paragraph')
  const image2 = await page.getByRole('img')
  const newtextContext = await p2.textContent()
  const newimgScr = await image2.getAttribute('src')
  console.log(textContext)
  console.log(imgScr)
  console.log(newtextContext)
  console.log(newimgScr)

  await expect(textContext).not.toEqual(newtextContext)
  await expect(imgScr).toEqual(newimgScr)

});
