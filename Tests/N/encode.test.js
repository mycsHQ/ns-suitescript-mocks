/**
 * Tests for a Netsuite encode Module
 *
 */

const fileUnderTest = require('../../N/encode');


describe('Testing encode module', () => {
  it('Should return object with properies available in Netsuite\'s encode module ', () => {
    const expected = { convert: expect.any(Function), Encoding: expect.any(Object) };
    expect(fileUnderTest).toMatchObject(expected);
  });
});
