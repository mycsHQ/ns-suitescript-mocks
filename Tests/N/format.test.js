/**
 * Tests for a Netsuite format Module
 *
 */

const fileUnderTest = require('../../N/format');

describe('Testing format module', () => {
  it('Should return object with properies available in Netsuite\'s format module ', () => {
    const expected = {
      format: expect.any(Function),
      parse: expect.any(Function),
      Type: expect.any(Object),
      Timezone: expect.any(Object),
    };
    expect(fileUnderTest).toMatchObject(expected);
  });
});
