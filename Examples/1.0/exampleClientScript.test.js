const fileUnderTest = require('./exampleClientScript');

describe('salesorder_CL', () => {
  describe('saveRecord()', () => {
    it('should display confirm and retun true for subsidiary 2-7', () => {
      const values = {
        subsidiary: random(2, 7),
      };
      const spyRecordType = spyOn(global, 'nlapiGetRecordType').and.returnValue('salesorder');
      const spyGetValue = spyOn(global, 'nlapiGetFieldValue').and.callFake(fieldName => values[fieldName] );
      const spyAlert = spyOn(window, 'alert').and.callThrough();
      const spyConfirm = spyOn(window, 'confirm').and.callThrough();
      const result = fileUnderTest.saveRecord();
      expect(spyRecordType).toHaveBeenCalled();
      expect(spyGetValue).toHaveBeenCalledWith('subsidiary');
      expect(spyGetValue).toHaveBeenCalledWith('custbodymycs_custom_order');
      expect(spyGetValue).toHaveBeenCalledWith('custbody_mycs_feasibility');
      expect(spyGetValue).toHaveBeenLastCalledWith('custbody_mycs_foxycartid');
      expect(spyConfirm).toHaveBeenCalledWith(
        'Do you want to auto approve this order?\nIf yes click on \'Ok\' button.\nIf not please click on \'Cancel\' button',
      );
      expect(spyAlert).not.toHaveBeenCalled();
      expect(result).toEqual(true);
    });
    it('should set field value if confirmed', () => {
      const values = {
        subsidiary: random(2, 7),
      };
      const spyRecordType = spyOn(global, 'nlapiGetRecordType').and.returnValue('salesorder');
      const spyGetValue = spyOn(global, 'nlapiGetFieldValue').and.callFake(fieldName => values[fieldName] );
      const spySet = spyOn(global, 'nlapiSetFieldValue').and.callThrough();
      const spyAlert = spyOn(window, 'alert').and.callThrough();
      const spyConfirm = spyOn(window, 'confirm').and.returnValue(true);
      const result = fileUnderTest.saveRecord();
      expect(spyRecordType).toHaveBeenCalled();
      expect(spyGetValue).toHaveBeenCalledWith('subsidiary');
      expect(spyGetValue).toHaveBeenCalledWith('custbodymycs_custom_order');
      expect(spyGetValue).toHaveBeenCalledWith('custbody_mycs_feasibility');
      expect(spyGetValue).toHaveBeenLastCalledWith('custbody_mycs_foxycartid');
      expect(spyConfirm).toHaveBeenCalledWith(
        'Do you want to auto approve this order?\nIf yes click on \'Ok\' button.\nIf not please click on \'Cancel\' button',
      );
      expect(spyAlert).not.toHaveBeenCalled();
      expect(spySet).toHaveBeenCalledWith('custbody_mycs_auto_approva_manual_ord', 'T');
      expect(result).toEqual(true);
    });
    it('should not display confirm and retun true for subsidiary 1 and 8 and not approved orders', () => {
      const values = {
        subsidiary: random(0, 1) ? 1 : 8,
      };
      const spyRecordType = spyOn(global, 'nlapiGetRecordType').and.returnValue('salesorder');
      const spyGetValue = spyOn(global, 'nlapiGetFieldValue').and.callFake(fieldName => values[fieldName] );
      const spyAlert = spyOn(window, 'alert').and.callThrough();
      const spyConfirm = spyOn(window, 'confirm').and.callThrough();
      const result = fileUnderTest.saveRecord();
      expect(spyRecordType).toHaveBeenCalled();
      expect(spyGetValue).toHaveBeenCalledWith('subsidiary');
      expect(spyGetValue).toHaveBeenCalledWith('custbodymycs_custom_order');
      expect(spyGetValue).toHaveBeenCalledWith('custbody_mycs_feasibility');
      expect(spyGetValue).toHaveBeenLastCalledWith('custbody_mycs_foxycartid');
      expect(spyConfirm).not.toHaveBeenCalled();
      expect(spyAlert).not.toHaveBeenCalled();
      expect(result).toEqual(true);
    });
    it('should display alert in case of Javascript error', () => {
      const spyRecordType = spyOn(global, 'nlapiGetRecordType').and.returnValue('salesorder');
      spyOn(global, 'nlapiGetFieldValue').and.throwError('Test');
      const spyAlert = spyOn(window, 'alert').and.callThrough();
      const result = fileUnderTest.saveRecord();
      expect(spyRecordType).toHaveBeenCalled();
      expect(spyAlert).toHaveBeenCalledWith(expect.stringContaining('Unexpected Error occured:'));
      expect(result).toEqual(true);
    });
    it('should display alert in case of NetSuite error', () => {
      spyOn(global, 'nlapiGetFieldValue').and.callFake(() => {
        throw new nlobjError('Test');
      });
      const spyRecordType = spyOn(global, 'nlapiGetRecordType').and.returnValue('salesorder');
      const spyAlert = spyOn(window, 'alert').and.callThrough();
      const result = fileUnderTest.saveRecord();
      expect(spyRecordType).toHaveBeenCalled();
      expect(spyAlert).toHaveBeenCalledWith(expect.stringContaining('Unexpected Error occured:'));
      expect(result).toEqual(true);
    });
  });
  describe('validateLine()', () => {
    it('should do nothing and return true if type !== item', () => {
      const spyGet = spyOn(global, 'nlapiGetFieldValue').and.callThrough();
      const result = fileUnderTest.validateLine('');
      expect(spyGet).not.toHaveBeenCalled();
      expect(result).toEqual(true);
    });
    it('should do nothing and return true if type === item and is not reclamation', () => {
      const spyGet = spyOn(global, 'nlapiGetFieldValue').and.callThrough();
      const result = fileUnderTest.validateLine('item');
      expect(spyGet).toHaveBeenLastCalledWith('custbody1');
      expect(result).toEqual(true);
    });
    it('should do nothing and return true if type === item and is reclamation with reason', () => {
      const values = {
        custbody1: 'T',
        quantity: random(1, 10),
        custcol_mycs_reclamation_reason: random(1, 10),
      };
      const spyGetValue = spyOn(global, 'nlapiGetFieldValue').and.callFake(fieldName => values[fieldName] );
      const spyCurrentLine = spyOn(global, 'nlapiGetCurrentLineItemValue').and.callFake((sublist, fieldName) => values[fieldName] );
      const spyAlert = spyOn(window, 'alert').and.callThrough();
      const result = fileUnderTest.validateLine('item');
      expect(spyGetValue).toHaveBeenLastCalledWith('custbody1');
      expect(spyCurrentLine).toHaveBeenCalledWith('item', 'quantity');
      expect(spyCurrentLine).toHaveBeenLastCalledWith('item', 'custcol_mycs_reclamation_reason');
      expect(spyAlert).not.toHaveBeenCalled();
      expect(result).toEqual(true);
    });

    it('should return false and display alert if type === item and is reclamation with no reason', () => {
      const values = {
        custbody1: 'T',
        quantity: random(1, 10),
      };
      const spyGetValue = spyOn(global, 'nlapiGetFieldValue').and.callFake(fieldName => values[fieldName] );
      const spyGetCurrentValue = spyOn(global, 'nlapiGetCurrentLineItemValue').and.callFake((sublist, fieldName) => values[fieldName] );
      const spyAlert = spyOn(window, 'alert').and.callThrough();
      const result = fileUnderTest.validateLine('item');
      expect(spyGetValue).toHaveBeenLastCalledWith('custbody1');
      expect(spyGetCurrentValue).toHaveBeenCalledWith('item', 'quantity');
      expect(spyGetCurrentValue).toHaveBeenLastCalledWith('item', 'custcol_mycs_reclamation_reason');
      expect(spyGetValue).toHaveBeenLastCalledWith('custbody1');
      expect(spyAlert).toHaveBeenCalledWith(expect.any(String));
      expect(result).toEqual(false);
    });
  });
});
