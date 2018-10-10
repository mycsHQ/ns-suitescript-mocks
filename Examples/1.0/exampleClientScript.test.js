const fileUnderTest = require('./exampleClientScript');

describe('salesorder_CL', () => {
  describe('saveRecord()', () => {
    it('should set field value  for subsidiary greater than 1 after user confirmation', () => {
      const values = {
        subsidiary: random(2, 10),
      };
      const spyRecordType = spyOn(global, 'nlapiGetRecordType').and.returnValue('salesorder');
      const spyGetValue = spyOn(global, 'nlapiGetFieldValue').and.callFake(fieldName => values[fieldName]);
      const spySet = spyOn(global, 'nlapiSetFieldValue').and.callThrough();
      const spyAlert = spyOn(window, 'alert').and.callThrough();
      const spyConfirm = spyOn(window, 'confirm').and.returnValue(true);
      const result = fileUnderTest.saveRecord();
      expect(spyRecordType).toHaveBeenCalled();
      expect(spyGetValue).toHaveBeenCalledWith('subsidiary');
      expect(spyConfirm).toHaveBeenCalledWith(
        'Do you want to auto approve this order?\nIf yes click on \'Ok\' button.\nIf not please click on \'Cancel\' button',
      );
      expect(spyAlert).not.toHaveBeenCalled();
      expect(spySet).toHaveBeenCalledWith('custbody_mycs_auto_approva_manual_ord', 'T');
      expect(result).toEqual(true);
    });
    it('should not display confirm and retun true for subsidiary 1 ', () => {
      const values = {
        subsidiary: 1,
      };
      const spyRecordType = spyOn(global, 'nlapiGetRecordType').and.returnValue('salesorder');
      const spyGetValue = spyOn(global, 'nlapiGetFieldValue').and.callFake(fieldName => values[fieldName]);
      const spyAlert = spyOn(window, 'alert').and.callThrough();
      const spyConfirm = spyOn(window, 'confirm').and.callThrough();
      const result = fileUnderTest.saveRecord();
      expect(spyRecordType).toHaveBeenCalled();
      expect(spyGetValue).toHaveBeenCalledWith('subsidiary');
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
});
