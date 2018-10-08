/**
 * Tests for a Netsuite log Module
 *
 */

const fileUnderTest = require('../../N/log');

describe('Testing log module', () => {
  it('Should return object with properies available in Netsuite\'s log module ', () => {
    const expected = {
      debug: expect.any(Function),
      error: expect.any(Function),
      audit: expect.any(Function),
      system: expect.any(Function),
    };
    expect(fileUnderTest).toMatchObject(expected);
  });
});
