/**
 * Return a Netsuite Format Module
 *
 * @classDescription Format object
 * @constructor
 * @returns {N/Module}
 */

const moment = require('moment');

function FormatModule() {
  /**
   *
   * @param {*} options
   * @returns {*}
   */
  function format(options) {
    return moment(options.value).format('D.M.YYYY H:m');
  }
  return {
    format: options => format(options),
    parse: options => format(options),
    Type: {
      DATETIME: 'DATETIME',
      DATETIMEZ: 'DATETIMEZ',
    },
    Timezone: {
      EUROPE_AMSTERDAM: 'EUROPE_AMSTERDAM',
      AMERICA_LOS_ANGELES: 'AMERICA_LOS_ANGELES',
    },
  };
}
module.exports = FormatModule;
