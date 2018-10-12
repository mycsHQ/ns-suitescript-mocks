
const { join } = require('path');

// External libs
const lodash = require('lodash');
const moment = require('moment');
const fs = require('fs');

// Utils
const rawRecord = require('../Utils/record');
const logModule = require('../N/log');
const Request = require('../Utils/request');

const external = {};
let extendedModules = {};

global.mapModules = {
  // external
  lodash,
  moment,
  // Utils
  rawRecord,
  logModule,
  Request,
};

/**
 * Check if provided name is matching Netsuite module name
 * @param {*} moduleName
 */
const getNetSuiteModule = (moduleName) => {
  const path = join(__dirname, `../${moduleName}.js`);
  // eslint-disable-next-line global-require, import/no-dynamic-require
  return fs.existsSync(path) ? require(path) : '';
};

/**
 * Define function
 *
 * @param {Array} name
 * @param {function} defaultValues
 */
const defineFunction = (params, callback, moduleObject) => {
  // Convert the dependencies to modules. Add module mapping below for new modules.
  Object.keys(extendedModules).forEach((key) => {
    const element = extendedModules[key];
    external[key] = element;
    global.mapModules[key] = external[key];
  });
  const defineParams = params.map((depName) => {
    const excludedLibrary = ['moment', 'formLibrary', 'lodash', 'xml2json', 'freightClass'].includes(depName);
    const moduleType = typeof global.mapModules[depName];
    let amdModule = getNetSuiteModule(depName);

    if (!amdModule) {
      if (moduleType === 'string') {
        // eslint-disable-next-line global-require, import/no-dynamic-require
        amdModule = require(join(__dirname, '../../..', global.mapModules[depName]));
      } else {
        amdModule = (moduleType === 'function' && !excludedLibrary) ? global.mapModules[depName]() : global.mapModules[depName];
      }
    }
    return amdModule;
  });

  const returnValue = callback ? callback(...defineParams) : {};

  if (typeof moduleObject !== 'undefined' && moduleObject.exports) {
    // eslint-disable-next-line no-param-reassign
    moduleObject.exports = returnValue;
  }

  return returnValue;
};


module.exports = (config) => {
  extendedModules = config;
  return { define: defineFunction, nsMockups: global.mapModules };
};
