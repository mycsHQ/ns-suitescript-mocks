/**
 * Tests for a Netsuite Message Module
 *
 */

const fileUnderTest = require('../../../N/ui/message');


describe('Testing message module', () => {
  it('Should return object with Type and Create properies', () => {
    const expected = { Type: expect.any(Object), create: expect.any(Function) };
    expect(fileUnderTest).toMatchObject(expected);
  });
});
