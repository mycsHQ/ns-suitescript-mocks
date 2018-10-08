/**
 * Tests for a define function
 *
 */

const fileUnderTest = require('../../Utils/define');

describe('Testing define', () => {
  it('Should return a function ', () => {
    expect(fileUnderTest).toEqual(expect.any(Function));
  });
});
