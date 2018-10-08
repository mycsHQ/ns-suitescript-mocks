/**
 * Return a Netsuite Log Module
 *
 * @constructor
 * @returns {N/log}
 */
module.exports = {
  debug: (title, value) => nlapiLogExecution('debug', title, value),
  error: (title, value) => nlapiLogExecution('error', title, value),
  audit: (title, value) => nlapiLogExecution('audit', title, value),
  system: (title, value) => nlapiLogExecution('system', title, value),
};
