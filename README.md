# react-base-project
Boilerplate for starting project based on create-react-app and configuration of ESLINT and Prettier.
We use this repository as a base for react projects, we configured Eslint and Prettier for code standards and code formatting.

*For usage on VsCode, install Eslint, Prettier and Editor Config plugins from store.*

## VsCode minimal settings.json configuration

```sh
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": false
},
"[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": false
},
"[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": false
},
"[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": false
},
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"eslint.alwaysShowStatus": true,
```

## Installation

```sh
$ yarn
$ yarn start
```

Visit localhost:3000
