const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {

    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation()
    await page.goto('https://forebears.io/zimbabwe/forenames')// or https://forebears.io/zimbabwe/surnames
    await page.setViewport({ width: 1280, height: 689 })
    await navigationPromise
    await navigationPromise

    /**
     * Get all the list items with a specifc selector
     */
    const services = await page.evaluate(() =>
        Array.from(
            document.querySelectorAll('.sur a'),
            (element) => element.textContent
        )
    );

    await browser.close();

    // wwrite the names to the names.js file
    services.map((x)=> {
        fs.appendFile('names.js', `"${x}",
        `, function (err) {
            if (err) throw err;
        });
    })

})();


