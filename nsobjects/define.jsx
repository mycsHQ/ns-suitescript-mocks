/* eslint-disable */
const {join} = require('path');

const record = require('./recordModule.jsx');
const search = require('./searchModule.jsx');
const email = require('./emailModule.jsx');
const moment = require('moment');
const message = require('./messageModule.jsx');
const format = require('./formatModule.jsx');
const url = require('./urlModule.jsx');
const redirect = require('./redirectModule');
const serverWidget = require('./serverWidgetModule.jsx');
const error = require('./errorModule.jsx');
const render = require('./renderModule.jsx');
const file = require('./fileModule.jsx');
const xml = require('./xmlModule.jsx');
const runtime = require('./runtimeModule.jsx');
const log = require('./logModule.jsx');
const task = require('./taskModule.jsx');
const request = require('./request.jsx');
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
  'lodash': require('lodash'),
  'rawRecord': rawRecord
};

function updateModules(extendedModules){
  for (const key in extendedModules) {
    if (extendedModules.hasOwnProperty(key)) {
      const element = extendedModules[key];
      external[key] = (typeof element === 'string') ? require(join(__dirname, '../../..', element)) : element;
      global.mapModules[key] = external[key];
    } 
  }
}

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
      external[key] = (typeof element === 'string') ? require(join(__dirname, '../../..', element)) : element;
      global.mapModules[key] = external[key];
    } 
  }
  var params2 = params.map(depName => {
    if (typeof global.mapModules[depName] === 'function' && !['moment', 'formLibrary', 'lodash', 'xml2json', 'freightClass'].includes(depName)) {
      return global.mapModules[depName]();
    } else {
      return global.mapModules[depName];
    }
  });
  if (callback) {
    return callback.apply(null, params2);
  }
};

module.exports = (config) => {
  extendedModules = config;
  return { define: defineFunction, nsMockups: mapModules, updateModules: updateModules };
}