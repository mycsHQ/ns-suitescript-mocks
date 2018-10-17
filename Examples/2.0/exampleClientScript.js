/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */

/**
  * This is an example of client script file written in SuiteScript 2.0
  * In corresponding .test.js file you can find a way how to test it
  * of course with our ns-suitescript-mocks. This file needs to run through babel compilation
  * in order to be used in NEtSuite as it is using ES6
  */

// Line below is required only becasue we are in the same repository as the library,
// normally define is added to globally once you import our library and follow setup instructions
const { define } = require('../../index')({});

// eslint-disable-next-line import/no-amd
define(['N/ui/message'], (msg) => {
  /**
     * Page Init function to show message after form submit
     *
     * @param {N/context} context Module
     * @returns {boolean}
     */
  function pageInit(context) {
    // eslint-disable-next-line prefer-destructuring
    const currentRecord = context.currentRecord;
    const myMsg = msg.create({
      title: 'Checkbox was checked',
      message: 'Checkbox was checked!',
      type: msg.Type.CONFIRMATION,
    });
    const showMessage = currentRecord.getValue({
      fieldId: 'messageonpost',
    });
    if (showMessage) {
      myMsg.show({
        duration: 5000,
      });
    }

    return true;
  }
  // required for node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      pageInit,
      message: msg,
    };
  }
  return {
    pageInit,
  };
});
