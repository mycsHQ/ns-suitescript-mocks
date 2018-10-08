/**
 * Tests for a Netsuite file Module
 *
 */

const fileUnderTest = require('../../N/file');


describe('Testing file module', () => {
  it('Should return object with properies available in Netsuite\'s file module ', () => {
    const expected = {
      Type: expect.any(Object),
      Encoding: expect.any(Object),
      create: expect.any(Function),
      load: expect.any(Function),
      delete: expect.any(Function),
    };
    expect(fileUnderTest).toMatchObject(expected);
  });
});
