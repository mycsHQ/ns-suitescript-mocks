const Form = require('../../Utils/form');
/**
 * Return a Netsuite server/widget Module
 *
 * @classDescription server/widget object
 * @constructor
 * @returns {N/server/widget}
 */

const FieldType = {
  CHECKBOX: 'checkbox',
  CURRENCY: 'currency',
  DATE: 'date',
  DATETIME: 'datetime',
  DATETIMETZ: 'datetimetz',
  EMAIL: 'email',
  FILE: 'file',
  FLOAT: 'float',
  HELP: 'help',
  INLINEHTML: 'inlinehtml',
  INTEGER: 'interger',
  IMAGE: 'image',
  LABEL: 'label',
  LONGTEXT: 'longtext',
  MULTISELECT: 'multiselect',
  PASSWORD: 'password',
  PERCENT: 'percent',
  PHONE: 'phone',
  SELECT: 'select',
  RADIO: 'radio',
  RICHTEXT: 'richtext',
  TEXT: 'text',
  TEXTAREA: 'textarea',
  TIMEOFDAY: 'timeofday',
  URL: 'url',
};
const FieldLayoutType = {
  STARTROW: 'startrow',
  MIDROW: 'midrow',
  ENDROW: 'endrow',
  OUTSIDE: 'outside',
  OUTSIDEBELOW: 'outsidebelow',
  OUTSIDEABOVE: 'outsideabove',
  NORMAL: 'normal',
};
const FieldBreakType = {
  NONE: 'none',
  STARTCOL: 'startcol',
  STARTROW: 'startrow',
};
const FieldDisplayType = {
  DISABLED: 'disabled',
  ENTRY: 'entry',
  HIDDEN: 'hidden',
  INLINE: 'inline',
  NORMAL: 'normal',
  READONLY: 'readonly',
};
const SublistType = {
  INLINEEDITOR: 'inlineeditor',
  EDITOR: 'editor',
  LIST: 'list',
  STATICLIST: 'staticlist',
};

module.exports = {
  FieldType,
  FieldLayoutType,
  FieldBreakType,
  FieldDisplayType,
  SublistType,
  createForm: obj => new Form(obj.title),
};
