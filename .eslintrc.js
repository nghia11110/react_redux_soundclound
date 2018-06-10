module.exports = {
    "env": {
        "browser": true,
        // "commonjs": true,
        "es6": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    // "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
        // "allowImportExportEverywhere": false,
        // "codeFrame": false
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "prefer-const": 2,
        "prefer-destructuring": ["error", {"object": true, "array": false}],
        "object-curly-spacing": ["error", "always"],
    }
};