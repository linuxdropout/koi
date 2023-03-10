const baseConfig = require('../../.eslintrc')

module.exports = {
  ...baseConfig,
  env: { browser: true },
  extends: [
    ...baseConfig.extends,
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ...baseConfig.parserOptions,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    ...baseConfig.settings,
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      typescript: { alwaysTryTypes: true },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  plugins: [
    ...baseConfig.plugins,
    'react',
    'jsx-a11y',
    'react-hooks',
  ],
  rules: {
    ...baseConfig.rules,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
  },
}
