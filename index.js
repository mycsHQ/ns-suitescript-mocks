

const def = require('./nsobjects/define');
const nsMocksV1 = require('./nsobjects/nsmockup-1.0');
const file = require('./nsobjects/fileModule');


module.exports = (config) => {
  console.log('### Initialise Jest - Build mocks for netsuite ###');
  Object.keys(nsMocksV1).forEach((key) => {
    global[key] = nsMocksV1[key];
  });
  global._ = require('lodash');
  global.log = require('./nsobjects/logModule');
  global.random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  window.alert = (msg) => { console.log(msg); };
  window.confirm = msg => random(0, 1) + (msg || '');
  window.main_form = { submit: () => true };
  window.open = url => console.log(`window.open => ${url}`);

  global.getGELlabel = a => file.create({ id: 'test.pdf', fileType: 'PDF', contents: a.toString() });
  global.generateDHLlabel = a => file.create({ id: 'test.pdf', fileType: 'PDF', contents: a.toString() });
  global.generateGEODISlabel = a => file.create({ id: 'test.pdf', fileType: 'PDF', contents: a.toString() });
  global.generateRHENUSlabel = a => file.create({ id: 'test.pdf', fileType: 'PDF', contents: a.toString() });
  global.generateMYCSlabel = a => file.create({ id: 'test.pdf', fileType: 'PDF', contents: a.toString() });
  global.generateDSTlabel = a => file.create({ id: 'test.pdf', fileType: 'PDF', contents: a.toString() });

  global.setWindowChanged = (a, b) => { a.isChanged = b; };
  global.save_record = () => true;

  global.getSettings = name => (
    {
      name,
      username: 'sample_username',
      password: 'sample_password',
      url: 'sample_rul',
      id: 1,
      host: 'sample_host',
      customData: 'sample_customData',
      isProduction: 'false',
    });

  const defineResult = def(config);
  return {
    define: defineResult.define,
    nsMockups: defineResult.nsMockups,
    updateModules: defineResult.updateModules,
  };
};
