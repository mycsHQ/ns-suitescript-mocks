/**
 * Tests for a Netsuite url Module
 *
 */

const record = require('../../N/record');
const url = require('../../N/url');

describe('Testing url module', () => {
  it('Should return object with properies available in Netsuite\'s url module ', () => {
    const expected = {
      resolveDomain: expect.any(Function),
      resolveScript: expect.any(Function),
      resolveRecord: expect.any(Function),
    };

    expect(url).toMatchObject(expected);
  });

  it('Should return transaction url', () => {
    const result = url.resolveRecord({ recordType: record.Type.SALES_ORDER, recordId: 1234567 });

    expect(result).toBe('/app/accounting/transactions/salesord.nl?id=1234567');
  });
});
