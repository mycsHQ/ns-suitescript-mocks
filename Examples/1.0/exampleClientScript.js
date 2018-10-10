/**
   * Save Record Function
   * @returns {Boolean}
  */

require('../../index')({});

function saveRecord() {
  try {
    if (nlapiGetRecordType().toString() !== 'salesorder') {
      return true;
    }
    const subId = parseInt(nlapiGetFieldValue('subsidiary'), 10);
    const isCustom = nlapiGetFieldValue('custbodymycs_custom_order') === 'T';
    const isApproved = nlapiGetFieldValue('custbody_mycs_feasibility') === 'T';
    const isFromFoxycard = !!nlapiGetFieldValue('custbody_mycs_foxycartid');

    // Do not trigger for polish subsidiary and custom orders
    if (isApproved || isFromFoxycard || !subId || subId === 1 || subId === 8 || isCustom) {
      return true;
    }
    const confirmMessage = "Do you want to auto approve this order?\nIf yes click on 'Ok' button.\nIf not please click on 'Cancel' button";
    // eslint-disable-next-line no-alert
    if (confirm(confirmMessage)) {
      nlapiSetFieldValue('custbody_mycs_auto_approva_manual_ord', 'T');
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

/**
   * Validate Line Function
   *
   * @param {string} type
   * @returns {Boolean}
  */
function validateLine(type) {
  if (type === 'item') {
    const isReclamation = nlapiGetFieldValue('custbody1') === 'T';
    const isSpecialItem = nlapiGetCurrentLineItemValue('item', 'custcol_so_special_order_item') === 'T';
    const isSpecialReason = nlapiGetCurrentLineItemValue('item', 'custcol_mycs_custom_recla_reason') === 'T';
    const itemAllowedCode = isSpecialItem ? '1002 or above.' : 'from 0 to 1001.';
    const itemType = isSpecialItem ? 'special order item' : 'modular item';
    if (isReclamation) {
      const qty = nlapiGetCurrentLineItemValue('item', 'quantity');
      if (qty && !nlapiGetCurrentLineItemValue('item', 'custcol_mycs_reclamation_reason')) {
        // eslint-disable-next-line no-alert
        alert(`Please provide Reclamation reason for the following items:${nlapiGetCurrentLineItemText('item', 'item')}`);
        return false;
      } if (isSpecialItem !== isSpecialReason) {
        // eslint-disable-next-line no-alert
        alert(`For ${itemType} please select reclamation reason with code ${itemAllowedCode}`);
        return false;
      }
    }
  }

  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    saveRecord,
    validateLine,
  };
}
