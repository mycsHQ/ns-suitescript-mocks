/**
 * Tests for a search-column function
 *
 */

const fileUnderTest = require('../../Utils/search-column');

describe('Testing search-column', () => {
  it('Should return a function ', () => {
    expect(fileUnderTest).toEqual(expect.any(Function));
  });
});
