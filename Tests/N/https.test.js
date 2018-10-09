/**
 * Tests for a Netsuite https Module
 *
 */

const fileUnderTest = require('../../N/https');

describe('Testing http module', () => {
  it('Should return object with properies available in Netsuite\'s https module ', () => {
    const expected = {
      post: expect.any(Function),
      get: expect.any(Function),
      delete: expect.any(Function),
    };
    expect(fileUnderTest).toMatchObject(expected);
  });
});
