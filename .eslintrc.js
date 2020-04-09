module.exports = {
    parser: 'babel-eslint',
    extends: [
      'prettier',
      'prettier/standard',
      'prettier/react',
      'plugin:react/recommended'
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    env: {
      browser: true,
    },
    plugins: ['react', 'prettier', 'react-hooks'],
    rules: {
      indent: ['error', 2, { SwitchCase: 1 }],
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'es5',
          semi: false,
          singleQuote: true,
          printWidth: 120,
        },
      ],
      'react/jsx-filename-extension': ['warn', {extensions: ['.jsx', '.js']}],
      'import/prefer-default-export': 'off',
      'no-param-reassign': 'off',
      'no-console': ['error', {allow: ['tron']}],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    }
  }
