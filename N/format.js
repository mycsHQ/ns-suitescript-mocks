/**
 * Return a Netsuite Format Module
 *
 * @classDescription Format object
 * @constructor
 * @returns {N/Module}
 */

const moment = require('moment');

module.exports = {
  format: options => moment(options.value).format(options.format || 'D.M.YYYY H:m'),
  parse: options => moment(options.value, options.format || 'D.M.YYYY H:m').toDate(),
  Type: {
    DATETIME: 'DATETIME',
    DATETIMEZ: 'DATETIMEZ',
  },
  Timezone: {
    EUROPE_AMSTERDAM: 'EUROPE_AMSTERDAM',
    AMERICA_LOS_ANGELES: 'AMERICA_LOS_ANGELES',
  },
};
