/**
 * Tests for a Netsuite task Module
 *
 */

const fileUnderTest = require('../../N/task');

describe('Testing task module', () => {
  it('Should return object with properies available in Netsuite\'s task module ', () => {
    const expected = {
      checkStatus: expect.any(Function),
      create: expect.any(Function),
      TaskType: expect.any(Object),
    };
    expect(fileUnderTest).toMatchObject(expected);
  });
});
