module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: [
    'prettier', // Use Prettier plugin to integrate ESLint with Prettier
    'import', // Add this line to include the import plugin
  ],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'prettier/prettier': 'error',

    // Custom rules
    'no-console': 'off', // Allow console logs in development
    'no-unused-vars': ['error', { args: 'none' }], // Disable unused arguments warnings
    'no-shadow': 'error', // Prevent variable shadowing
    'no-underscore-dangle': 'off', // Allow underscores in variable names
    'prefer-const': 'error', // Prefer using const for variables that don't get reassigned
    'arrow-body-style': ['error', 'as-needed'], // Use concise arrow functions when possible
    'consistent-return': 'error', // Enforce consistent return values
    'no-param-reassign': 'error', // Prevent reassigning function parameters
    // 'import/extensions': ['error', 'ignorePackages'], // Require file extensions for non-package imports
    // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }], // Allow devDependencies in development files
    'import/extensions': 'off', // You can configure this rule as needed
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off', // Allow named exports
    'max-len': ['error', { code: 135 }], // Limit line length to 120 characters
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }], // Allow short-circuit and ternary expressions
    'prefer-destructuring': ['error', { object: true, array: false }], // Prefer object destructuring over array destructuring
    'func-names': 'off', // Allow anonymous functions
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'], // Prevent specific syntax usages
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { multiline: true, consistent: true },
        ObjectPattern: { multiline: true, consistent: true },
        ImportDeclaration: { multiline: true, consistent: true },
        ExportDeclaration: { multiline: true, consistent: true },
      },
    ], // Enforce newlines inside curly braces
  },
};
