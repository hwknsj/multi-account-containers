/** @type import('eslint').ESLint.ConfigData */
module.exports = {
  "env": {
    "node": true,
    "mocha": true
  },
  "parserOptions": {
    "ecmaVersion": "latest",
  },
  "rules": {
    "no-restricted-globals": ["error", "browser"]
  }
};
