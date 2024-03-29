module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
      "airbnb-base",
      "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
      "semi": ["error", "never"],
      "quotes": ["error", "single"],
      "comma-dangle": ["error", "never"],
      "no-plusplus": "off",
      "no-underscore-dangle": "off",
      "no-alert": "off"
    },
    "settings": {
      "import/resolver": {
        alias: {
          map: [
            ["components", "./src/components"],
            ["containers", "./src/containers"],
            ["data", "./src/data"],
            ["common", "./src/common"],
            ["store", "./src/store"]
          ],
        }
      }
    }
};
