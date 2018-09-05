/**
 * Return a Netsuite task module
 *
 * @returns {N/Module}
 */

module.exports = {
  checkStatus: () => 'PENDING',
  create: () => ({
    submit: () => random(1, 100).toString()
  }),
  TaskType: {
    SCHEDULED_SCRIPT: 'SCHEDULED_SCRIPT',
    MAP_REDUCE: 'MAP_REDUCE'
  }
};

