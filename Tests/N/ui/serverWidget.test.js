/**
 * Tests for a Netsuite server/widget Module
 *
 */

const fileUnderTest = require('../../../N/ui/serverWidget');


describe('Testing serverWidget module', () => {
  it('Should return object with properies available in Netsuite\'s serverWidget Widget module', () => {
    const expected = {
      FieldType: expect.any(Object),
      FieldLayoutType: expect.any(Object),
      FieldBreakType: expect.any(Object),
      FieldDisplayType: expect.any(Object),
      SublistType: expect.any(Object),
      createForm: expect.any(Function),
    };
    expect(fileUnderTest).toMatchObject(expected);
  });
});
