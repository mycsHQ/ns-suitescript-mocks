const file = require('../SuiteScriptMockup2.0/fileModule');
const log = require('../SuiteScriptMockup2.0/logModule');

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
