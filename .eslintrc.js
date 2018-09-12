module.exports = {
  "plugins": [
    "suitescript"
  ],
  "extends": "airbnb-base",
  "env": {
    "jest": true,
    "suitescript/suitescript2": true,
    "suitescript/suitescript1": true
  },
  "rules": {
    "func-names": 2,
    "no-underscore-dangle": 2,
    "no-param-reassign": 2,
    "global-require": 2,
    "no-unused-vars": 2,
    "max-len": ["error", { "code": 150 }],
    "no-use-before-define": 2
  },
  "globals": {
    "random": true,
    "window": true,
    "DOMParser": true
  }
}