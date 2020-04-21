const extensionLoader = require("cypress-browser-extension-plugin/loader");

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = on => {
  on("before:browser:launch", extensionLoader.load(
    { source: "./extension", alias: "heureka-extension" },
  ));
};
