/**
 * Tests for a Netsuite url Module
 *
 */

const fileUnderTest = require('../../N/url');

describe('Testing url module', () => {
  it('Should return object with properies available in Netsuite\'s url module ', () => {
    const expected = {
      resolveScript: expect.any(Function),
      resolveRecord: expect.any(Function),
    };
    expect(fileUnderTest).toMatchObject(expected);
  });
});
