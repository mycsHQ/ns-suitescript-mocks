/**
 * Tests for a form function
 *
 */

const fileUnderTest = require('../../Utils/form');

describe('Testing form', () => {
  it('Should return a function ', () => {
    expect(fileUnderTest).toEqual(expect.any(Function));
  });
});
