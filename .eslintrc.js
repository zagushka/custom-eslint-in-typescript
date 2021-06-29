module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['example'],
  ignorePatterns: ["temp.js", "**/packages/eslint-plugin-example/**/*.ts"],
  rules: {
    'example/no-state-objects': 'error',
  }
};
