/**
 * Tests for a Netsuite redirect Module
 *
 */

const fileUnderTest = require('../../N/redirect');

describe('Testing redirect module', () => {
  it('Should return object with properies available in Netsuite\'s redirect module ', () => {
    const expected = {
      toRecord: expect.any(Function),
      toTaskLink: expect.any(Function),
    };
    expect(fileUnderTest).toMatchObject(expected);
  });
});
