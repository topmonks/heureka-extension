const config = require("../config");

Cypress.config("defaultCommandTimeout", 10 * 1000); // 10s should be enough time to load a page

describe("heureka-extension", () => {
  for (const shop of config) {
    if (shop.exampleProductPath) {
      it(shop.domain, () => {
        // Massive height is important,
        // as czech e-shops love sticky headers, footer, announcements, consents, ...
        cy.viewport(1280, 1600);
        cy.visit(shop.origin + shop.exampleProductPath);
        cy.get(".HeurekaContainer").should("be.visible");
        cy.screenshot(shop.domain, { capture: "viewport" });
      });
    }
  }
});
