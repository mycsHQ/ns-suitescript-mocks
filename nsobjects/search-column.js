/**
 * Return a new instance of nlobjSearchColumn used for column objects used to define search return columns.
 *
 * @classDescription search column.
 * @return {nlobjSearchColumn}
 * @constructor
 * @param {string} name column name.
 * @param {string} join internal ID for joined search where this column is defined
 * @param {string} summary
 *
 */
// eslint-disable-next-line no-unused-vars
module.exports = function (name, join, summary) {
  /**
   * @param {*} option
   * @returns {*}
   */
  function setSort(option) {
    return {
      name, join, summary, option,
    };
  }
  return {
    name, join, summary, setSort,
  };
};
