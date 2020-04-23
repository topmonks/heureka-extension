// Beware: only & skip buttons will appear only after finishing all tests
// https://github.com/bahmutov/cypress-skip-and-only-ui/issues/74
const task = require("cypress-skip-and-only-ui/task");
const extensionLoader = require("cypress-browser-extension-plugin/loader");

// TODO: Nicer
require("child_process").fork("./cypress/other-extensions/unpack.js");

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => { // eslint-disable-line no-unused-vars
  on("task", task);
  on("before:browser:launch", extensionLoader.load(
    { source: "./extension", alias: "heureka-extension" },
    { source: "./cypress/other-extensions/unpacked/i-dont-care-about-cookies", alias: "cookies" },
    { source: "./cypress/other-extensions/unpacked/ublock-origin", alias: "ublock", skipHooks: true },
  ));
};
