/**
 * Tests for a Netsuite format Module
 *
 */

const fileUnderTest = require('../../N/currentRecord');

describe('Testing currentRecord module', () => {
  it('Should return object with properies available in Netsuite\'s current record module ', () => {
    const expected = {
      attach: expect.any(Function),
      create: expect.any(Function),
      copy: expect.any(Function),
      delete: expect.any(Function),
      detach: expect.any(Function),
      get: expect.any(Function),
      load: expect.any(Function),
      submitFields: expect.any(Function),
      transform: expect.any(Function),
      Type: expect.any(Object),
    };
    expect(fileUnderTest).toMatchObject(expected);
  });
});
