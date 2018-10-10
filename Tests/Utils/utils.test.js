/**
 * Tests for utils library
 *
 */

const fileUnderTest = require('../../Utils/utils');

describe('Testing utils library', () => {
  describe('random', () => {
    it('Should return integer', () => {
      expect(fileUnderTest.random(1, 10)).toEqual(expect.any(Number));
    });
  });
});
