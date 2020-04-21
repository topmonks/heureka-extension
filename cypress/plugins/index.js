const extensionLoader = require("cypress-browser-extension-plugin/loader");

require("child_process").fork("./cypress/other-extensions/unpack.js");

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = on => {
  on("before:browser:launch", extensionLoader.load(
    { source: "./extension", alias: "heureka-extension" },
    { source: "./cypress/other-extensions/unpacked/i-dont-care-about-cookies", alias: "cookies" },
    { source: "./cypress/other-extensions/unpacked/ublock-origin", alias: "ublock", skipHooks: true },
  ));
};
