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
  "globals": {
    "random": true,
    "window": true,
    "DOMParser": true
  }
}