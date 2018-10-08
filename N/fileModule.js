/**
 * Return a Netsuite File Module
 *
 * @classDescription File object
 * @constructor
 * @returns {N/Module}
 */

const fileModule = {
  name: '',
  fileType: '',
  contents: '',
  description: '',
  folder: 0,
  encoding: '',
  isIncative: false,
  isOnline: false,
  getNsObjectType: () => 'nlobjFile',
  getDescription: () => fileModule.description,
  getFolder: () => fileModule.folder,
  getId: () => fileModule.id,
  getName: () => fileModule.name,
  getSize: () => fileModule.contents.length,
  getType: () => fileModule.fileType,
  getURL: () => `https://system.eu2.netsuite.com/app/common/media/mediaitem.nl?${fileModule.id}`,
  getValue: () => fileModule.contents,
  isInactive: () => fileModule.isInactive,
  setDescription: (newDescription) => { fileModule.description = newDescription; },
  setEncoding: (encodingType) => { fileModule.encoding = encodingType; },
  getEncoding: () => fileModule.encoding,
  getContents: () => fileModule.contents,
  setFolder: (folderId) => {
    fileModule.folder = folderId;
  },
  setIsInactive: (inactive) => {
    fileModule.isInactive = inactive;
  },
  setIsOnline: (onlineValue) => {
    fileModule.isOnline = onlineValue;
  },
  setName: (newName) => {
    fileModule.name = newName;
  },
  save: () => global.random(1, 1000),
};
const create = obj => Object.assign(fileModule, obj);
const fileDelete = obj => obj.id;
const Type = { CSV: 'csv', PDF: 'pdf' };
const Encoding = {
  UTF8: 'utf8',
  WINDOWS_1252: 'windows_1252',
  ISO_8859_1: 'iso',
  GB18030: 'china_simpl',
  SHIFT_JIS: 'japan',
  MAC_ROMAN: 'mac',
  GB2312: 'GB2312',
  BIG5: 'big',
};


module.exports = {
  Type, Encoding, create, load: create, delete: fileDelete,
};
