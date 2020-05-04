/* eslint-disable */
const puppeteer = require("puppeteer");

const EXT_REL_PATH = ".."; // heureka-extension

(async () => {
  const pathToExtension = require("path").join(__dirname, EXT_REL_PATH);
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`
    ]
  });

  const {
    content_scripts: [{ matches: contentScriptMatches }]
  } = require(`${EXT_REL_PATH}/manifest.json`);
  const eshops = contentScriptMatches.map(mask => mask.replace("/*", "/"));

  for (let index = 0; index < eshops.length; index++) {
    const address = eshops[index];
    if (address.search("alza") > -1) continue; // they block puppeteer
    const page = await browser.newPage();
    await page.goto(address);

    // Magic random product link getter
    const randomProductLinks = await page.evaluate(() => {
      const random = () => 0.5 - Math.random();
      return [...document.querySelectorAll("a")]
        .filter(link => {
          const currency = link.href.search(".sk") > -1 ? "€" : "Kč";
          return link.innerText.search(currency) > -1;
        })
        .sort(random)
        .map(link => link.href);
    });

    if (randomProductLinks) {
      console.log(randomProductLinks);
      // await page.goto(randomProductAddress);
    }
  }

  // const targets = await browser.targets();
  // const backgroundPageTarget = targets.find(
  //   target => target.type() === "background_page"
  // );
  // const backgroundPage = await backgroundPageTarget.page();

  // Test the background page as you would any other page.
  // await browser.close();
})();
