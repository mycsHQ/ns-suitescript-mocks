/**
 * Return a Netsuite URL Module
 *
 * @classDescription URL object
 * @constructor
 * @returns {N/url}
 */

module.exports = function () {
  return {
    resolveScript: obj =>
      `https://system.eu2.netsuite.com/app/site/hosting/scriptlet.nl?script=${ obj.scriptId }&deploy=${ obj.deploymentId }`,
    resolveRecord: () =>
      'https://system.eu2.netsuite.com//app/accounting/transactions/salesord.nl',
  };
};
