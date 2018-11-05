/**
 * Tests for a form function
 *
 */

const fileUnderTest = require('../../Utils/form');

describe('Testing form', () => {
  it('Should return a function ', () => {
    expect(fileUnderTest).toEqual(expect.any(Function));
  });

  it('Should return a object ', () => {
    expect(fileUnderTest()).toEqual(expect.any(Object));
  });

  it('Should has own property addButton ', () => {
    const result = fileUnderTest().addSublist({ id: 'id', type: 'type', label: 'label' });
    expect(Object.prototype.hasOwnProperty.call(result, 'addButton')).toBeTruthy();
  });
});
