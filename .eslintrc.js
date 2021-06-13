module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
    ],
    "plugins": [
        "react"
    ],
    "rules": {
        "no-underscore-dangle": 0,
        "arrow-body-style": 0,
        "no-shadow": 0,
        "consistent-return": 0,
        "no-nested-ternary": 0,
        "no-console": 0,
        "no-case-declarations": 0,
        "import/prefer-default-export": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
};
