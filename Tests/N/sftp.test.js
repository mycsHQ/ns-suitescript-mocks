/**
 * Tests for a Netsuite sftp Module
 *
 */

const fileUnderTest = require('../../N/sftp');

describe('Testing sftp module', () => {
  it('Should return object with properies available in Netsuite\'s sftp module ', () => {
    const expected = {
      createConnection: expect.any(Function),
    };
    expect(fileUnderTest).toMatchObject(expected);
  });
});
