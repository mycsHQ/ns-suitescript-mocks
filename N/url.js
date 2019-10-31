/**
 * Return a Netsuite URL Module
 *
 * @classDescription URL object
 * @constructor
 * @returns {N/url}
 */

module.exports = {
  HostType: {
    APPLICATION: 'APPLICATION',
    CUSTOMER_CENTER: 'CUSTOMER_CENTER',
    FORM: 'FORM',
    RESTLET: 'RESTLET',
    SUITETALK: 'SUITETALK',
  },
  resolveDomain: () => 'system.eu2.netsuite.com',
  resolveRecord: () => 'https://system.eu2.netsuite.com/app/accounting/transactions/salesord.nl',
  resolveScript: obj => `https://system.eu2.netsuite.com/app/site/hosting/scriptlet.nl?script=${obj.scriptId}&deploy=${obj.deploymentId}`,
};
