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
    },
    "settings": {
      "import/resolver": {
        alias: {
          map: [
            ["components", "./src/components"],
            ["containers", "./src/containers"],
            ["data", "./src/data"]
          ],
        }
      }
    }
};
