/**
 * @NApiVersion 2.0
 * @NScriptType MapReduceScript
 */

/**
  * This is an example of Map/Reduce script file written in SuiteScript 2.0
  * In corresponding .test.js file you can find a way how to test it
  * of course with our ns-suitescript-mocks. This file needs to run through babel compilation
  * in order to be used in NEtSuite as it is using ES6
  */

// Line below is required only becasue we are in the same repository as the library,
// normally define is added to globally once you import our library and follow setup instructions

const { define } = require('../../../index')({});

// eslint-disable-next-line import/no-amd
define(['N/record', 'N/log', 'N/https', 'N/runtime', 'lodash'],

  (record, log, https, runtime, _) => {
    /**
     * @returns {Object}
     */
    function getInputData() {
      const baseUrl = runtime.envType === 'SANDBOX' ? 'https://test.com/' : 'https://production.com/';
      const requestData = {
        url: `${baseUrl}api/v2/tickets.json`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic 1234567890',
        },
      };
      const result = https.get(requestData);
      const urls = [];
      if (result.body && JSON.parse(result.body).count) {
        const count = parseInt(JSON.parse(result.body).count, 10);
        const pages = _.ceil(count / 100);
        for (let index = 1; index <= pages; index += 1) {
          urls.push(`${baseUrl}api/v2/tickets.json?page=${index}`);
        }
      }
      return urls;
    }


    /**
     *
     * @param {object} context NS context for map function
     */
    function map(context) {
      try {
        const pageURL = JSON.parse(context.value).toString();
        const requestData = {
          url: pageURL.toString(),
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Basic 1234567',
          },
        };
        const result = https.get(requestData);
        const parsedBody = JSON.parse(result.body);
        if (result && parsedBody && parsedBody.tickets) {
          const { tickets } = parsedBody;
          tickets.forEach((ticket) => {
            if (ticket.external_id) {
              record.submitFields({
                type: record.Type.SUPPORT_CASE,
                id: ticket.external_id,
                values: {
                  custevent_page_id: ticket.id,
                },
              });
            }
          });
        }
      } catch (error) {
        log.error('Error in map', error);
      }
    }
    // required for node
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = {
        getInputData,
        map,
      };
    }
    return {
      getInputData,
      map,
    };
  });
