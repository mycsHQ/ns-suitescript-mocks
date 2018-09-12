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
    "func-names": 1,
    "no-underscore-dangle": 1,
    "no-param-reassign": 1,
    "global-require": 1,
    "no-unused-vars": 1,
    "max-len": ["error", { "code": 150 }],
    "no-use-before-define": 1
  },
  "globals": {
    "random": true,
    "window": true,
    "DOMParser": true
  }
}