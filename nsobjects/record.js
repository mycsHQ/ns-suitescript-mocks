/**
 * Return a Netsuite Record
 *
 * @classDescription Record object
 * @constructor
 * @param {string} name
 * @param {object} defaultValues
 * @returns {nlobjRecord}
 */
function NsRecord(name, defaultValues = {}) {
  const id = defaultValues.id || Math.ceil(Math.random() * 100);
  const selectedLine = {};
  this.values = defaultValues;
  this.values.item = this.values.item || [];
  this.type = 'nlobjRecord';
  return {
    // 1.0 methods
    getId: () => id,
    getName: () => name,

    // 2.0 methods
    // eslint-disable-next-line no-unused-vars
    id,
    commit: () => {},
    commitLine: obj => selectedLine[obj.sublistId],
    commitLineItem: sublist => selectedLine[sublist],
    createCurrentLineItemSubrecord: (sublistId, subrecordName) => nlapiCreateRecord(subrecordName, { sublistId }),

    getAll: () => this.values, // Helper
    getCurrentLineItemValue: (sublist, field) => this.values[sublist][selectedLine[sublist]][field],
    getCurrentSublistValue: obj => this.values[obj.sublistId][selectedLine[obj.sublistId]][obj.fieldId],
    getField: options => ({
      getSelectOptions: () => [{ value: random(1, 100), text: options.fieldId }],
    }),
    getFieldText: valueName => this.values[valueName],
    getFieldValue: valueName => this.values[valueName],
    getLineCount: options => (this.values[options.sublistId || options] ? this.values[options.sublistId || options].length : 0),
    getLineItemCount: sublist => this.values[sublist].length,
    getLineItemText: (sublist, field, index) => this.values[sublist][index - 1][`${field}_display`],
    getLineItemValue: (sublist, field, index) => this.values[sublist][index - 1][field],
    getSublistText: options => this.values[options.sublistId][options.line][options.fieldId],
    getSublistValue: options => this.values[options.sublistId][options.line][options.fieldId],
    getSubrecord: options => nlapiCreateRecord(options),
    getText: options => this.values[options.fieldId || options],
    getValue: options => this.values[options.fieldId || options],
    viewSubrecord: options => nlapiCreateRecord(options),
    editSubrecord: options => nlapiCreateRecord(options),
    createSubrecord: options => nlapiCreateRecord(options),
    findLineItemValue: (sublist, field, value) => {
      const i = this.values[sublist].findIndex(line => line[field] === value);
      return i < 0 ? i : i + 1;
    },
    findSublistLineWithValue: (options) => {
      let index = -1;
      this.values[options.sublistId].forEach((line, i) => {
        if (line[options.fieldId] === options.value) {
          index = i;
        }
      });
      return index;
    },

    insertLineItem: (sublist, index) => {
      this.values[sublist].splice(index - 1, 0, {});
    },

    removeLine: (obj) => {
      this.values[obj.sublistId].splice(obj.line, 1);
    },
    removeLineItem: (sublist, index) => {
      this.values[sublist].splice(index - 1, 1);
    },

    save: () => id, // Helper

    selectLine: (obj) => {
      selectedLine[obj.sublistId] = obj.line;
      this.values[obj.sublistId][obj.line] = this.values[obj.sublistId][obj.line] || {};
    },
    selectLineItem: (sublist, index) => {
      selectedLine[sublist] = index - 1;
      this.values[sublist][index - 1] = this.values[sublist][index - 1] || {};
    },
    selectNewLine: (obj) => {
      selectedLine[obj.sublistId] = this.values[obj.sublistId] ? this.values[obj.sublistId].length : 0;
      this.values[obj.sublistId] = this.values[obj.sublistId] || [];
      this.values[obj.sublistId][selectedLine[obj.sublistId]] = this.values[obj.sublistId][selectedLine[obj.sublistId]] || {};
    },
    selectNewLineItem: (sublistId) => {
      selectedLine[sublistId] = this.values[sublistId] ? this.values[sublistId].length : 0;
      this.values[sublistId] = this.values[sublistId] || [];
      this.values[sublistId][selectedLine[sublistId]] = this.values[sublistId][selectedLine[sublistId]] || {};
    },
    setCurrentLineItemValue: (sublist, field, value) => {
      this.values[sublist][selectedLine[sublist]][field] = value;
    },
    setCurrentSublistValue: (obj) => {
      this.values[obj.sublistId][selectedLine[obj.sublistId]][obj.fieldId] = obj.value;
    },
    setFieldValue: (valueName, value) => {
      this.values[valueName] = value;
    },
    setLineItemValue: (sublist, field, index, value) => {
      this.values[sublist][index - 1][field] = value;
    },
    setSublistValue: (options) => {
      this.values[options.sublistId][options.line][options.fieldId] = options.value;
    },
    setValue: (newValue) => { // Helper
      this.values[newValue.fieldId] = newValue.value;
    },
    setText: (newValue) => { // Helper
      this.values[newValue.fieldId] = newValue.text;
    },
  };
}
module.exports = NsRecord;
