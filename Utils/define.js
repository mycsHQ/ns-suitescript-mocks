
const { join } = require('path');

// External libs
const lodash = require('lodash');
const moment = require('moment');
const fs = require('fs');

// NetSuite Modules

// const error = require('../SuiteScriptMockup2.0/errorModule');
// const file = require('../SuiteScriptMockup2.0/fileModule');
// const format = require('../SuiteScriptMockup2.0/formatModule');
// const http = require('../SuiteScriptMockup2.0/httpModule');
// const message = require('../SuiteScriptMockup2.0/messageModule');
// const url = require('../SuiteScriptMockup2.0/urlModule');
// const record = require('../SuiteScriptMockup2.0/recordModule');
// const redirect = require('../SuiteScriptMockup2.0/redirectModule');
// const render = require('../SuiteScriptMockup2.0/renderModule');
// const request = require('../Utils/request');
// const runtime = require('../SuiteScriptMockup2.0/runtimeModule');
// const search = require('../SuiteScriptMockup2.0/searchModule');
// const serverWidget = require('../SuiteScriptMockup2.0/serverWidgetModule');
// const sftp = require('../SuiteScriptMockup2.0/sftpModule');
// const task = require('../SuiteScriptMockup2.0/taskModule');
// const workflow = require('../SuiteScriptMockup2.0/workflowModule');
// const xml = require('../SuiteScriptMockup2.0/xmlModule');

// Utils
const rawRecord = require('../Utils/record');

const external = {};
let extendedModules = {};

global.mapModules = {
  // external
  lodash,
  moment,
  // Utils
  rawRecord,
};

/**
 * Check if provided name is matching Netsuite module name
 * @param {*} moduleName
 */
const getNetSuiteModule = (moduleName) => {
  const path = `../${moduleName}`;
  // eslint-disable-next-line global-require, import/no-dynamic-require
  return fs.existsSync(path) ? require(path) : '';
};

/**
 * Define function
 *
 * @param {Array} name
 * @param {function} defaultValues
 */
const defineFunction = (params, callback) => {
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
  return callback ? callback(...defineParams) : {};
};


module.exports = (config) => {
  extendedModules = config;
  return { define: defineFunction, nsMockups: global.mapModules };
};
