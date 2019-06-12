// Temp fix for import.
// https://github.com/benmosher/eslint-plugin-import/issues/1285#issuecomment-466212438
const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx'];
const allExtensions = jsExtensions.concat(tsExtensions);

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'graphql', 'react-hooks'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  settings: {
    react: {
      version: '16.8',
    },
    // Temp fix for import.
    // https://github.com/benmosher/eslint-plugin-import/issues/1285#issuecomment-466212438
    'import/extensions': allExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': tsExtensions,
    },
    'import/resolver': {
      node: {
        extensions: allExtensions,
      },
    },
  },
  // Este rules.
  rules: {
    // I believe type is enforced by callers.
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Temp fix for import.
    // https://github.com/benmosher/eslint-plugin-import/issues/1285#issuecomment-466212438
    'import/named': 'off',
    // Enforce arrow functions only is afaik not possible. But this helps.
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    // Fix for TypeScript.
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    // I believe shadowing is a nice language feature.
    'no-shadow': 'off',
    // Does not work with TypeScript export type.
    'import/prefer-default-export': 'off',
    // Does not work with Babel react-native to react-native-web
    'import/no-unresolved': 'off',
    // We have types.
    'react/prop-types': 'off',
    // They are fine sometimes.
    'no-nested-ternary': 'off',
    // This is fine.
    'lines-between-class-members': 'off',
    // We use it for immer. It should be checked by readonly anyway.
    'no-param-reassign': 'off',
    // Irrelevant.
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/camelcase': 'off',
    // TSC checks it.
    '@typescript-eslint/no-unused-vars': 'off',
    'no-undef': 'off',
    'react/jsx-no-undef': 'off',
    // React Hooks.
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    // Reconsider, maybe enable later:
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'react/destructuring-assignment': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-cycle': 'off',
    // GraphQL
    // "graphql/template-strings": ['error', {
    //   // Import default settings for your GraphQL client. Supported values:
    //   // 'apollo', 'relay', 'lokka', 'fraql', 'literal'
    //   env: 'apollo',
    //   schemaJson: require('./schema.json')
    // }]
  },
};