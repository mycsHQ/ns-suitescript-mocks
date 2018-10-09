/**
 * Tests for a request function
 *
 */

const fileUnderTest = require('../../Utils/request');

describe('Testing request', () => {
  it('Should return a function ', () => {
    expect(fileUnderTest).toEqual(expect.any(Function));
  });
});
