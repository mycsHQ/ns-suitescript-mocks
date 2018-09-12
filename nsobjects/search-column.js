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

module.exports = (name, join, summary) => ({
  name,
  join,
  summary,
  setSort: option => ({
    name, join, summary, option,
  }),
});
