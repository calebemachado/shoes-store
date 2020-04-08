module.exports = {
    parser: "babel-eslint",
    extends: [
      "prettier",
      "prettier/standard",
      "prettier/react",
      "plugin:react/recommended"
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    env: {
      browser: true,
    },
    plugins: ['react', "prettier"],
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
      'import/prefer-default-export': 'off'
    }
  }
