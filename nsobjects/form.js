/**
 * Return a Netsuite form
 *
 * @classDescription form object
 * @constructor
 * @returns {nlobjForm}
 */

module.exports = function (name) {
  const field = {
    updateLayoutType: () => true,
    updateBreakType: () => true,
    addSelectOption: () => true,
    updateDisplayType: () => true,
  };
  this.name = name;
  this.values = {};
  this.fields = [];
  this.buttons = [];
  this.sublist = [];
  this.submitButtons = [];
  return {
    getType: () => 'nlobjForm',
    getAll: () => this.values,
    getName: () => this.name,
    addButton: obj => this.buttons.push(obj),
    addSublist: (obj) => {
      this.sublist.push(obj);
      return {
        addField: (options) => {
          this.fields.push(options);
          return field;
        },
        setSublistValue: () => '',
      };
    },
    addSubmitButton: obj => this.submitButtons.push(obj),
    addField: (obj) => {
      this.fields.push(obj);
      return field;
    },
    getFields: () => this.fields,
    getButtons: () => this.buttons,
    getSubmitButtons: () => this.submitButtons,
  };
};
