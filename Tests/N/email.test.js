/**
 * Tests for a Netsuite email Module
 *
 */

const fileUnderTest = require('../../N/email');


describe('Testing email module', () => {
  it('Should return object with properies available in Netsuite\'s email module', () => {
    const expected = {
      send: expect.any(Function),
    };
    expect(fileUnderTest).toMatchObject(expected);
  });
});
