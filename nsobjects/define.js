/* eslint-disable */
const {join} = require('path');

const record = require('./recordModule');
const search = require('./searchModule');
const email = require('./emailModule');
const moment = require('moment');
const lodash = require('lodash');
const message = require('./messageModule');
const format = require('./formatModule');
const url = require('./urlModule');
const redirect = require('./redirectModule');
const serverWidget = require('./serverWidgetModule');
const error = require('./errorModule');
const render = require('./renderModule');
const file = require('./fileModule');
const xml = require('./xmlModule');
const runtime = require('./runtimeModule');
const log = require('./logModule');
const task = require('./taskModule');
const request = require('./request');
const workflow = require('./workflowModule');
const http = require('./httpModule');
const rawRecord = require('./record');
var external = {}
global.mapModules = {
  'N/record': record,
  'N/currentRecord': record,
  'N/search': search,
  'N/email': email,
  'N/ui/message': message,
  'N/url': url,
  'N/redirect': redirect,
  'N/ui/serverWidget': serverWidget,
  'N/format': format,
  'N/error': error,
  'N/render': render,
  'N/file': file,
  'N/xml': xml,
  'N/encode': { convert: obj => obj.string, Encoding: { UTF_8: 'UTF_8', BASE_64: 'BASE_64' } },
  'N/runtime': runtime,
  'N/workflow': workflow,
  'N/sftp': () => ({
    createConnection: option => ({
      upload: (uploadOption) => global.random(1, 1000),
      download: (downloadOption) => file.create()
    })
  }),
  'N/https': http,
  'N/log': log,
  'N/task': task,
  'N/request': request,
  'N/http': http,
  'lodash': lodash,
  'rawRecord': rawRecord,
  'moment': moment
};



/**
 * Define function
 *
 * @param {Array} name
 * @param {function} defaultValues
 */
var defineFunction = (params, callback) => {
  // Convert the dependencies to modules. Add module mapping below for new modules.
  for (const key in extendedModules) {
    if (extendedModules.hasOwnProperty(key)) {
      const element = extendedModules[key];
      external[key] =  element;
      global.mapModules[key] = external[key];
    } 
  }
  var params2 = params.map(depName => {
    if (typeof global.mapModules[depName] === 'function' && !['moment', 'formLibrary', 'lodash', 'xml2json', 'freightClass'].includes(depName)) {
      return global.mapModules[depName]();
    } else {
      return  typeof global.mapModules[depName] === 'string' ?  require(join(__dirname, '../../..', global.mapModules[depName])) : global.mapModules[depName];
    }
  });
  if (callback) {
    return callback.apply(null, params2);
  }
};

module.exports = (config) => {
  extendedModules = config;
  return { define: defineFunction, nsMockups: mapModules };
}