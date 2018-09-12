/**
 * Return a Netsuite Record
 *
 * @classDescription Record object
 * @constructor
 * @param {object} defaultValues
 * @returns {nlobjRecord}
 */
module.exports = function (defaultValues = {}) {
  this.values = defaultValues;
  return {
    getLineCount: options => (this.values[options.group] ? this.values[options.group].length : 0),
    getSublistValue: (options) => {
      const f = this.values[options.group][options.line][options.name];
      return f;
    },
  };
};
