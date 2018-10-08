const Form = require('../Utils/form');
/**
 * Return a Netsuite server/widget Module
 *
 * @classDescription server/widget object
 * @constructor
 * @returns {N/server/widget}
 */

module.exports = (name) => {
  const FieldType = { DATE: 'date' };
  const FieldLayoutType = { NORMAL: 'normal' };
  const FieldBreakType = { STARTCOL: 'startcol' };
  const FieldDisplayType = { HIDDEN: 'hidden' };
  const SublistType = { LIST: 'list' };
  this.name = name;
  this.values = {};
  return {
    FieldType,
    FieldLayoutType,
    FieldBreakType,
    FieldDisplayType,
    SublistType,
    createForm: obj => new Form(obj.title),
  };
};
