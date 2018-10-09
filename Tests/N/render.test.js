/**
 * Tests for a Netsuite render Module
 *
 */

const fileUnderTest = require('../../N/render');

describe('Testing render module', () => {
  it('Should return object with properies available in Netsuite\'s render module ', () => {
    const expected = {
      create: expect.any(Function),
      xmlToPdf: expect.any(Function),
      transaction: expect.any(Function),
      DataSource: expect.any(Object),
      PrintMode: expect.any(Object),
    };
    expect(fileUnderTest).toMatchObject(expected);
  });
});
