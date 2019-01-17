/**
 * Tests for a form function
 *
 */

const Record = require('../../Utils/record');

describe('testing record', () => {
  it('should return a function ', () => {
    expect(Record).toEqual(expect.any(Function));
  });
});

describe('setFieldValues', () => {
  it('should check whether method exists', () => {
    const result = new Record('');
    expect(Object.prototype.hasOwnProperty.call(result, 'setFieldValues')).toBeTruthy();
  });
  it('should assign values to fieldName', () => {
    const result = new Record();
    const values = ['123456', '654321'];
    result.setFieldValues('selectField', values);
    expect(result.getFieldValue('selectField')).toEqual(['123456', '654321']);
  });
});

describe('getFieldValues', () => {
  it('should return values for id specified', () => {
    const result = new Record();
    result.setFieldValues('selectField', ['123', '123']);
    const myValues = result.getFieldValues('selectField');
    expect(myValues).toEqual(['123', '123']);
  });
});

describe('getRecordType', () => {
  it('should return record type', () => {
    const type = 'salesorder';
    const result = new Record(type);
    const recordType = result.getRecordType();
    expect(recordType).toEqual(type);
  });
});

describe('getLineItemCount', () => {
  it('should return number representing the length of a given sublist', () => {
    const sublistId = 'item';
    const itemsSublistData = [{
      item_display: '101.173.00',
      quantity: '3',
    },
    {
      item_display: '101.174.00',
      quantity: '1',
    }];
    const salesOrder = new Record('salesorder', {
      item: itemsSublistData,
    });
    const mockedItemsLength = itemsSublistData.length;
    const itemSublistLength = salesOrder.getLineItemCount(sublistId);
    expect(itemSublistLength).toEqual(mockedItemsLength);
  });
});
