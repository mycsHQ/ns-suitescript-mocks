const file = require('./file');
/**
 * Return a Netsuite Render Module
 *
 * @classDescription Render object
 * @constructor
 * @returns {N/Module}
 */

const Render = {
  notifyOff: false,
  template: '',
  records: [],
  data: [],
  setTemplateByScriptId: (templateId) => {
    Render.template = templateId;
  },
  setTemplateById: (templateId) => {
    Render.template = templateId;
  },
  addRecord: (obj) => {
    Render.records.push({ name: obj.name, record: obj.record });
  },
  addCustomDataSource: (obj) => {
    Render.data.push({ format: obj.format, alias: obj.alias, data: obj.data });
  },
  addSearchResults: (obj) => {
    Render.data.push({ format: obj.format, alias: obj.alias, data: obj.data });
  },
  renderAsString: () => '',
  transaction: () => file.create({ name: 'test.pdf', fileType: 'PDF', contents: Render.template }),
  renderAsPdf: () => file.create({ name: 'test.pdf', fileType: 'PDF', contents: Render.template }),
};
const create = () => {
  const newRender = Render;
  return newRender;
};
module.exports = {
  create,
  xmlToPdf: () => file.create({ name: 'test.pdf', fileType: 'PDF', contents: Render.template }),
  transaction: () => file.create({ name: 'test.pdf', fileType: 'PDF', contents: Render.template }),
  DataSource: {
    JSON: 'JSON',
  },
  PrintMode: {
    PDF: 'PDF',
  },
};
