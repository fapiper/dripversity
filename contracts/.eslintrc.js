module.exports = {
  env: {
    commonjs: true
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    "@typescript-eslint/no-var-requires": 0
  }
};
