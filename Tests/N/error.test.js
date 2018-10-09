/**
 * Tests for a Netsuite error Module
 *
 */

const fileUnderTest = require('../../N/error');


describe('Testing error module', () => {
  it('Should return object with properies available in Netsuite\'s error module ', () => {
    const expected = { create: expect.any(Function) };
    expect(fileUnderTest).toMatchObject(expected);
  });
});
