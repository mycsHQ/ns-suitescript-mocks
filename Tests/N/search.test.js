/**
 * Tests for a Netsuite search Module
 *
 */

const fileUnderTest = require('../../N/search');

describe('Testing search module', () => {
  it('Should return object with properies available in Netsuite\'s search module ', () => {
    const expected = {
      create: expect.any(Function),
      createColumn: expect.any(Function),
      lookupFields: expect.any(Function),
      Type: expect.any(Object),
      Operator: expect.any(Object),
      Sort: expect.any(Object),
      Summary: expect.any(Object),
    };
    expect(fileUnderTest).toMatchObject(expected);
  });
});
