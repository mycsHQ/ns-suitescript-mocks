/**
 * Tests for a Netsuite 1.0 library
 *
 */

const fileUnderTest = require('../../SuiteScriptMockup1.0/nsmockup-1.0');

describe('Testing nsmockup-1.0 library', () => {
  describe('nlapiResolveURL', () => {
    it('Should return string', () => {
      expect(fileUnderTest.nlapiResolveURL()).toEqual(expect.any(String));
    });
  });
  describe('nlapiGetContext', () => {
    it('Should return context object', () => {
      const expected = {
        getScriptId: expect.any(Function),
        getEnvironment: expect.any(Function),
        getRemainingUsage: expect.any(Function),
      };
      expect(fileUnderTest.nlapiGetContext()).toMatchObject(expected);
    });
  });
  describe('nlapiSearchRecord', () => {
    it('Should return an array', () => {
      expect(fileUnderTest.nlapiSearchRecord()).toEqual(expect.any(Array));
    });
  });
  describe('nlapiLookupField', () => {
    it('Should return a string', () => {
      expect(fileUnderTest.nlapiLookupField()).toEqual(expect.any(String));
    });
  });
  describe('nlapiEscapeXML', () => {
    it('Should return a string', () => {
      const xml = '<?xml version="1.0" encoding="UTF-8"?>';
      const escappedXml = '\\<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?\\>';
      const result = fileUnderTest.nlapiEscapeXML(xml);
      expect(result).toBe(escappedXml);
    });
  });
  describe('nlobjError', () => {
    it('Should create nlobjError object', () => {
      // eslint-disable-next-line new-cap
      const error = new fileUnderTest.nlobjError('test');
      expect(error.message).toEqual('test');
      expect(error.name).toEqual(expect.any(String));
      expect(error.getCode).toEqual(expect.any(Function));
      expect(error.getDetails).toEqual(expect.any(Function));
    });
  });
});
