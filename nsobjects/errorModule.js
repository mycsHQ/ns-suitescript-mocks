/**
 * Return a Netsuite Error Module
 *
 * @classDescription Error object
 * @constructor
 * @returns {N/Module}
 */
let _;
if (typeof module !== 'undefined' && module.exports) {
  _ = require('lodash');
}

module.exports = function () {
  const create = (obj) => {
    const newError = Error;
    return _.assignIn(newError, obj);
  };
  const Error = {
    name: '',
    message: '',
    notifyOff: false,
  };
  return { create };
};
