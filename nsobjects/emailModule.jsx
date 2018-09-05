/**
 * Return a Netsuite Email Module
 *
 * @classDescription Email object
 * @constructor
 * @returns {N/email}
 */

module.exports = {
  send: (obj) => nlapiLogExecution('Email', 'Sent', obj.toString())
};

