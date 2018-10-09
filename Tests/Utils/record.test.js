/**
 * Tests for a form function
 *
 */

const fileUnderTest = require('../../Utils/record');

describe('Testing record', () => {
  it('Should return a function ', () => {
    expect(fileUnderTest).toEqual(expect.any(Function));
  });
});
