

const lodash = require('lodash');
const def = require('./nsobjects/define');
const nsMocksV1 = require('./nsobjects/nsmockup-1.0');
const logModule = require('./nsobjects/logModule');


module.exports = (config) => {
  Object.keys(nsMocksV1).forEach((key) => {
    global[key] = nsMocksV1[key];
  });
  global._ = lodash;
  global.log = logModule;
  global.random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  window.alert = () => { };
  window.confirm = msg => random(0, 1) + (msg || '');
  window.main_form = { submit: () => true };
  window.open = (url) => { window.location = { url }; return window; };
  global.setWindowChanged = (window, isChanged) => { const currentWindow = window; currentWindow.isChanged = isChanged; };


  const defineResult = def(config);
  return {
    define: defineResult.define,
    nsMockups: defineResult.nsMockups,
    updateModules: defineResult.updateModules,
  };
};
