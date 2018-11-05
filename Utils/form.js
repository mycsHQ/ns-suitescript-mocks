
/**
  * Mock of NetSuite Form object
  * @param {String} name
  */
function NsForm(name) {
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
      const list = {
        ...obj,
        addField: (options) => {
          this.fields.push(options);
          return field;
        },
        addButton: (options) => {
          this.buttons.push(options);
        },
        setSublistValue: () => '',
      };
      this.sublist.push(list);
      return list;
    },
    addSubmitButton: obj => this.submitButtons.push(obj),
    addField: (obj) => {
      this.fields.push(obj);
      return field;
    },
    getFields: () => this.fields,
    getButtons: () => this.buttons,
    getSublist: ({ id }) => this.sublist.find(list => list.id === id),
    getSubmitButtons: () => this.submitButtons,
  };
}

module.exports = NsForm;
