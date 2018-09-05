/**
 * Return a Netsuite Message Module
 *
 * @classDescription Message object
 * @constructor
 * @returns {N/Module}
 */

const _ = require('lodash');

const Type = { CONFIRMATION: 'confirmation', INFORMATION: 'information', WARNING: 'warning', ERROR: 'error' };
const create = obj => {
  const newMessage = Message;
  return _.assignIn(newMessage, obj);
};
const Message = {
  title: '',
  message: '',
  type: '',
  duriation: 0,
  hide: () => { },
  show: options => {
    this.duration = options.duration;
  },
};

module.exports = { Type, create };
