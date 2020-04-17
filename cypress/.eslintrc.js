module.exports = {
  extends: ["plugin:cypress/recommended"],
  rules: {
    "import/no-extraneous-dependencies": "off" // Cypress tests uses dependencies that are installed just for dev env
  }
};
