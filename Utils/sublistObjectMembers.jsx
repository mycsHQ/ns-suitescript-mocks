/**
 * Return a Netsuite Sublist Object
 *
 * @classDescription Record sublist bject
 * @constructor
 * @param {string} name
 * @param {object} defaultValues
 * @returns {nlobjRecord}
 */
function sublistObjectMembers(sublist, defaultValues = {}) {
  const id = sublist.sublistId || sublist;
  this.values = defaultValues;
  this.values.item = defaultValues.item || [];
  return {
    getColumn: () => id,
    id,
    isChanged: this.values.isChanged || false,
    isDisplay: this.values.isDisplay || false,
    type: this.values.defaultValues.type || 'nlobjRecord',
  };
}

module.exports = sublistObjectMembers;
