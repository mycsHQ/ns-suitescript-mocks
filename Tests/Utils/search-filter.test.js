/**
 * Tests for a search-filter function
 *
 */

const fileUnderTest = require('../../Utils/search-filter');

describe('Testing search-filter', () => {
  it('Should return a function ', () => {
    expect(fileUnderTest).toEqual(expect.any(Function));
  });
});
