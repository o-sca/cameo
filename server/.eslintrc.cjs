module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "overrides": [
  ],
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "tsconfigRootDir": __dirname,
    "project": ["./tsconfig.json"],
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/await-thenable": "off",
    "@typescript-eslint/no-misused-promises": "off"
  }
}
