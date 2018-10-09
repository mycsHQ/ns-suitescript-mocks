/**
 * Tests for a Netsuite xml Module
 *
 */

const fileUnderTest = require('../../N/xml');

describe('Testing xml module', () => {
  it('Should return object with properies available in Netsuite\'s xml module ', () => {
    const expected = {
      Parser: expect.any(Object),
      XPath: expect.any(Object),
    };
    expect(fileUnderTest).toMatchObject(expected);
  });
});
