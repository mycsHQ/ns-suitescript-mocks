require('../../../index')({});

/**
   * Save Record Function
   * @returns {Boolean}
  */
function saveRecord() {
  try {
    if (nlapiGetRecordType().toString() !== 'salesorder') {
      return true;
    }
    const subId = parseInt(nlapiGetFieldValue('subsidiary'), 10);


    // Do not trigger for polish subsidiary and custom orders
    if (subId === 1) {
      return true;
    }
    const confirmMessage = "Do you want to auto approve this order?\nIf yes click on 'Ok' button.\nIf not please click on 'Cancel' button";
    // eslint-disable-next-line no-restricted-globals, no-alert
    if (confirm(confirmMessage)) {
      nlapiSetFieldValue('custbody_auto_approve_order', 'T');
    }

    return true;
  } catch (e) {
    let details = '';
    if (e instanceof nlobjError) {
      details = `${e.getCode()}\n${e.getDetails()}`;
    } else {
      details = e.toString();
    }

    // eslint-disable-next-line no-alert
    alert(`Unexpected Error occured: ${details}`);
    return true;
  }
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    saveRecord,
  };
}
