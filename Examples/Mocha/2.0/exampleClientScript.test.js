const assert = require('assert');
const sinon = require('sinon');
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

describe('firstMochatest', () => {
  it('should return true', () => {
    assert.equal(defaultValues.tranid, '12121');
  });
});
describe('exampleClientScript.js', () => {
  describe('pageInit', () => {
    it('should return true', () => {
      const result = fileUnderTest.pageInit(context);
      assert.deepEqual(result, true);
    });
    it('should call create message method', () => {
      // eslint-disable-next-line prefer-destructuring
      const message = fileUnderTest.message;
      const spyMessage = sinon.stub(message, 'create');
      fileUnderTest.pageInit(context);
      assert(spyMessage.called);
      assert(spyMessage.calledWithExactly({
        title: 'Checkbox was checked',
        message: 'Checkbox was checked!',
        type: 'confirmation',
      }));
      message.create.restore();
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
      const spyMesage = sinon.stub(message, 'create');
      const spyShow = sinon.spy(createdMessage, 'show');
      fileUnderTest.pageInit(context);
      assert(spyMesage.called);
      assert(spyShow.notCalled);
    });
  });
});
