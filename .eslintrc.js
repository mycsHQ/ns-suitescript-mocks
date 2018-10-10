module.exports = {
  "plugins": [
    "suitescript", "jest"
  ],
  "extends": "airbnb-base",
  "env": {
    browser: true,
    "jest": true,
    "jasmine": true,
    "suitescript/suitescript2": true,
    "suitescript/suitescript1": true
  },
  "globals": {
    "random": true,
    "window": true,
    "DOMParser": true
  }
}