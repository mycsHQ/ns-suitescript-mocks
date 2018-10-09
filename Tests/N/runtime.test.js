/**
 * Tests for a Netsuite runtime Module
 *
 */

const fileUnderTest = require('../../N/runtime');

describe('Testing runtime module', () => {
  it('Should return object with properies available in Netsuite\'s runtime module ', () => {
    const expected = {
      envType: expect.any(String),
      getCurrentUser: expect.any(Function),
      getCurrentScript: expect.any(Function),
    };
    expect(fileUnderTest).toMatchObject(expected);
  });
});
