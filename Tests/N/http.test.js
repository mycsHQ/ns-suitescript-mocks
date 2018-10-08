/**
 * Tests for a Netsuite http Module
 *
 */

const fileUnderTest = require('../../N/http');

describe('Testing http module', () => {
  it('Should return object with properies available in Netsuite\'s http module ', () => {
    const expected = {
      post: expect.any(Function),
      get: expect.any(Function),
      delete: expect.any(Function),
    };
    expect(fileUnderTest).toMatchObject(expected);
  });
});
