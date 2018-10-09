const file = require('../N/file');
const log = require('../N/log');

module.exports = {
  createConnection: (option) => {
    log.debug(option);
    return {
      upload: uploadOption => uploadOption,
      download: downloadOption => file.create(downloadOption),
    };
  }
  ,
};
