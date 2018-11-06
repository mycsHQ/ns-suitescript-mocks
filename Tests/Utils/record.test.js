/**
 * Tests for a form function
 *
 */

const fileUnderTest = require('../../Utils/record');

describe('testing record', () => {
  it('should return a function ', () => {
    expect(fileUnderTest).toEqual(expect.any(Function));
  });
});

describe('setFieldValues', () => {
  it('should check whether method exists', () => {
    const result = new fileUnderTest('');
    expect(result.hasOwnProperty('setFieldValues')).toBeTruthy();
  });
  it('should assign values to fieldName', () => {
    const result = new fileUnderTest();
    const values = ['123456', '654321']
    result.setFieldValues('selectField', values);
    expect(result.getFieldValue('selectField')).toEqual(values);
  });
})