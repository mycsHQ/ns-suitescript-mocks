/**
 * Return a Netsuite Error Module
 *
 * @classDescription Error object
 * @constructor
 * @returns {N/Module}
 */

const error = {
  name: '',
  message: '',
  notifyOff: false,
};
module.exports = {
  create: obj => Object.assign(error, obj),
};
