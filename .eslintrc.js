module.exports = {
  "extends": "airbnb-base",
  "env": {
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "quotes": ["error", "double"],
    "max-len": ["error", { "code": 200 }],

    // Consider re-enabling (some of) following rules
    // Right now, disabled to avoid massive reformatting
    "arrow-body-style": "off",
    "no-use-before-define": "off",
    "arrow-parens": ["error", "as-needed"],
    "default-case": "off",
    "implicit-arrow-linebreak": "off",
    "function-paren-newline": "off",
    "no-return-await": "off",
    "consistent-return": "off",
    "comma-dangle": "off",
    "no-console": "off",
    "no-var": "off",
    "operator-linebreak": "off",
    "no-restricted-syntax": "off",
    "prefer-template": "off",
    "object-curly-newline": "off",
    "nonblock-statement-body-position": "off",
    "camelcase": "off",
    "no-underscore-dangle": "off",
    "vars-on-top": "off",
    "no-shadow": "off"
  }
};
