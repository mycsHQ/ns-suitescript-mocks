/**
 * Return a Netsuite URL Module
 *
 * @classDescription URL object
 * @constructor
 * @returns {N/url}
 */

const record = require('./record');

const transactionPath = Object.freeze({
  [record.Type.PURCHASE_ORDER]: 'purchord',
  [record.Type.SALES_ORDER]: 'salesord',
});

module.exports = {
  HostType: {
    APPLICATION: 'APPLICATION',
    CUSTOMER_CENTER: 'CUSTOMER_CENTER',
    FORM: 'FORM',
    RESTLET: 'RESTLET',
    SUITETALK: 'SUITETALK',
  },
  resolveDomain: () => 'system.eu2.netsuite.com',
  resolveRecord: ({ recordType, recordId }) => `/app/accounting/transactions/${transactionPath[recordType]}.nl?id=${recordId}`,
  resolveScript: ({ scriptId, deploymentId }) => `https://system.eu2.netsuite.com/app/site/hosting/scriptlet.nl?script=${scriptId}&deploy=${deploymentId}`,
};
