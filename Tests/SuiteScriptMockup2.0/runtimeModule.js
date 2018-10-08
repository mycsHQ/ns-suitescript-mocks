/**
 * Return a Netsuite Runtime Module
 *
 * @classDescription Runtime object
 * @constructor
 * @returns {N/Module}
 */

module.exports = {
  envType: 'Test',
  getCurrentUser: () => ({
    id: random(1000, 2000),
    email: 'test@test.com',
  }),
  getCurrentScript: () => ({
    getParameter: obj => obj.name,
    getRemainingUsage: () => global.random(1, 9000),
  }),
};
