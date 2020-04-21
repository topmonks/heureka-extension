const scrawlers = require("../../extension/src/scrawlers");
const simpleBraceExpansion = require("../../utils/simpleBraceExpansion");

Cypress.config("defaultCommandTimeout", 10 * 1000); // 10s should be enough time to load a page

Cypress.on("uncaught:exception", (err, runnable) => { // eslint-disable-line no-unused-vars
  // Do not fail the test on uncaught exceptions
  // as we are testing on real websites which we don't control
  // and they fail, a lot
  return false;
});

const scrawlersToTest = scrawlers;
// const scrawlersToTest = pick(scrawlers, ["cycology"]);

describe("heureka-extension", () => {
  it.skip("Deletes old screenshots", () => {
    // `trashAssetsBeforeRuns` in `cypress.json` config file seems not to work
    // https://github.com/cypress-io/cypress/issues/5033
    cy.exec("rm -rf ./cypress/screenshots/");
  });

  for (const shop of Object.values(scrawlersToTest)) {
    for (const url of simpleBraceExpansion(shop.origin)) {
      const niceUrl = url.replace(/https:\/\/(www.)?/, "");
      it(niceUrl, () => {
        // Massive height is important,
        // as czech e-shops love sticky headers, footer, announcements, consents, ...
        cy.viewport(1280, 1600);

        // shop.origin is e.g. `https://www.czc.<TLD>/`
        // shop.origin is e.g. `cz,sk`

        cy.visit(url + "/" + shop.exampleProductPath);
        cy.get(".HeurekaContainer").should("be.visible");
        cy.screenshot(niceUrl, { capture: "viewport" });
      });
    }
  }
});

function pick(input, keys) { // eslint-disable-line no-unused-vars
  var obj = {};
  keys.forEach(k => obj[k] = input[k]); // eslint-disable-line no-return-assign
  return obj;
}
