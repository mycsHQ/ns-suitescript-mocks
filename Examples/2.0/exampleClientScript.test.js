const fileUnderTest = require('./exampleClientScript');

const defaultValues = {
  tranid: '12121',
  custbody_mycs_ship_method: 23,
  shipstatus: 'B',
  custbodysps_packagedetails: 'test',
};
const fulfillmentRecord = nlapiCreateRecord('itemfulfillment', defaultValues);
const context = {
  currentRecord: fulfillmentRecord,
};

describe('exampleClientScript.js', () => {
  describe('pageInit', () => {
    it('should return true', () => {
      const result = fileUnderTest.pageInit(context);
      expect(result).toBe(true);
    });
    it('should call create message method', () => {
      // eslint-disable-next-line prefer-destructuring
      const message = fileUnderTest.message;
      const spyMesage = spyOn(message, 'create');
      fileUnderTest.pageInit(context);
      expect(spyMesage).toHaveBeenLastCalledWith({
        title: 'Checkbox was checked',
        message: 'Checkbox was checked!',
        type: 'confirmation',
      });
    });
    it('should show message if checkbox is checked', () => {
      // eslint-disable-next-line prefer-destructuring
      const message = fileUnderTest.message;
      const createdMessage = message.create({
        title: 'Checkbox was checked',
        message: 'Checkbox was checked!',
        type: 'confirmation',
      });
      context.currentRecord.setFieldValue('messageonpost', true);
      const spyMesage = spyOn(message, 'create').and.returnValue(createdMessage);
      const spyShow = spyOn(createdMessage, 'show');
      fileUnderTest.pageInit(context);
      expect(spyMesage).toHaveBeenCalledWith({
        title: 'Checkbox was checked',
        message: 'Checkbox was checked!',
        type: 'confirmation',
      });
      expect(spyShow).toHaveBeenCalledWith({
        duration: 5000,
      });
    });
    it('should show not message if checkbox is not checked', () => {
      // eslint-disable-next-line prefer-destructuring
      const message = fileUnderTest.message;
      const createdMessage = message.create({
        message: 'Email with CSV was sent to your mailbox!',
        title: 'Email has been sent.',
        type: 'confirmation',
      });
      context.currentRecord.setFieldValue('messageonpost', false);
      const spyMesage = spyOn(message, 'create').and.returnValue(createdMessage);
      const spyShow = spyOn(createdMessage, 'show');
      fileUnderTest.pageInit(context);
      expect(spyMesage).toHaveBeenCalledWith({
        title: 'Checkbox was checked',
        message: 'Checkbox was checked!',
        type: 'confirmation',
      });
      expect(spyShow).not.toHaveBeenCalled();
    });
  });
});
