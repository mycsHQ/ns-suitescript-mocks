/**
 * Return a Netsuite File Module
 *
 * @classDescription File object
 * @constructor
 * @returns {N/Module}
 */
const _ = require('lodash');

const create = obj => {
  const newFile = File;
  return _.assignIn(newFile, obj);
};
const fileDelete = obj => obj.id;
const load = obj => {
  const newFile = File;
  return _.assignIn(newFile, obj);
};
const Type = { CSV: 'csv', PDF: 'pdf' };
const Encoding = {
  UTF8: 'utf8',
  WINDOWS_1252: 'windows_1252',
  ISO_8859_1: 'iso',
  GB18030: 'china_simpl',
  SHIFT_JIS: 'japan',
  MAC_ROMAN: 'mac',
  GB2312: 'GB2312',
  BIG5: 'big' };

const File = {
  name: '',
  fileType: '',
  contents: '',
  description: '',
  folder: 0,
  encoding: '',
  isIncative: false,
  isOnline: false,
  getNsObjectType: () => 'nlobjFile',
  getDescription: () => File.description,
  getFolder: () => File.folder,
  getId: () => File.id,
  getName: () => File.name,
  getSize: () => File.contents.length,
  getType: () => File.fileType,
  getURL: () => `https://system.eu2.netsuite.com/app/common/media/mediaitem.nl?${ File.id }`,
  getValue: () => File.contents,
  isInactive: () => File.isIncative,
  setDescription: newDescription => (File.description = newDescription),
  setEncoding: encodingType => (File.encoding = encodingType),
  getEncoding: () => File.encoding,
  getContents: () => File.contents,
  setFolder: folderId => {
    File.folder = folderId;
  },
  setIsInactive: inactive => {
    File.isIncative = inactive;
  },
  setIsOnline: onlineValue => {
    File.isOnline = onlineValue;
  },
  setName: newName => {
    File.name = newName;
  },
  save: () => global.random(1, 1000)
};

module.exports = { Type, Encoding, create, load, delete: fileDelete };
