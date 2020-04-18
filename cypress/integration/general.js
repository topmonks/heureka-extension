const config = require("../config");

Cypress.config("defaultCommandTimeout", 10 * 1000); // 10s should be enough time to load a page

describe("heureka-extension", () => {
  it.skip("Deletes old screenshots", () => {
    // `trashAssetsBeforeRuns` in `cypress.json` config file seems not to work
    // https://github.com/cypress-io/cypress/issues/5033
    cy.exec("rm -rf ./cypress/screenshots/");
  });

  for (const shop of config) {
    if (shop.exampleProductPath) {
      it(shop.domain, () => {
        // Massive height is important,
        // as czech e-shops love sticky headers, footer, announcements, consents, ...
        cy.viewport(1280, 1600);

        // shop.origin is e.g. `https://www.czc.<TLD>/`
        // shop.origin is e.g. `cz,sk`
        const host = shop.origin.replace("<TLD>", shop.tld.split(",")[0]);

        cy.visit(host + shop.exampleProductPath);
        cy.get(".HeurekaContainer").should("be.visible");
        cy.screenshot(shop.domain, { capture: "viewport" });
      });
    }
  }
});
