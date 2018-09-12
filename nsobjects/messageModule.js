/**
 * Return a Netsuite Message Module
 *
 * @classDescription Message object
 * @constructor
 * @returns {N/Module}
 */

const _ = require('lodash');

const message = {
  title: '',
  message: '',
  type: '',
  duriation: 0,
  hide: () => { },
  show: (options) => {
    this.duration = options.duration;
  },
};
const Type = {
  CONFIRMATION: 'confirmation', INFORMATION: 'information', WARNING: 'warning', ERROR: 'error',
};
const create = (obj) => {
  const newMessage = message;
  return _.assignIn(newMessage, obj);
};

module.exports = { Type, create };
