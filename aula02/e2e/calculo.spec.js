import {expect, test} from '@playwright/test';

test.describe('soma', () => {
    test("exibe resultado", async ({page}) =>{
        
        await page.goto('http://localhost:5500');
        await page.fill('#n1', '10');
        await page.fill('#n2', '20');
        await page.fill('button');
        const texto = await page.locator('output').innerText();

        expect(texto).toBe(30);

    })
})