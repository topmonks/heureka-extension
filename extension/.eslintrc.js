module.exports = {
  "env": {
    "browser": true,
  },
  "globals": {
    // Chrome extension specific
    "chrome": "readonly",
    "browser": "readonly",

    // This extension specific
    "scrawler": "writable",
    "parsePrice": "writeable",
  },
  "rules": {
    // Due to current code style
    "no-restricted-globals": "off",
    "no-unused-vars": "off",
  }
};
