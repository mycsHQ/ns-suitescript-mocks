/**
 * Return a Netsuite Request Object
 *
 * @classDescription Request object
 * @constructor
 * @param {object} defaultValues
 * @returns {nlobjRecord}
 */
function NsRequest(defaultValues = {}) {
  this.values = defaultValues;
  return {
    getLineCount: options => (this.values[options.group] ? this.values[options.group].length : 0),
    getSublistValue: (options) => {
      const f = this.values[options.group][options.line][options.name];
      return f;
    },
  };
}
module.exports = NsRequest;
