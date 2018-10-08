/**
 * Tests for a Netsuite workflow Module
 *
 */

const fileUnderTest = require('../../N/workflow');

describe('Testing workflow module', () => {
  it('Should return object with properies available in Netsuite\'s workflow module ', () => {
    const expected = {
      trigger: expect.any(Function),
      initiate: expect.any(Function),
    };
    expect(fileUnderTest).toMatchObject(expected);
  });
});
