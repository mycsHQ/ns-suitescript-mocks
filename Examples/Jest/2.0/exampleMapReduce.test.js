/**
  * This is a test file which shows you alternative way of getting modules in test
  * If you need some module in the test iteself you can either load it with require,
  * or simple use define function to load require modules
  */

const { define } = require('../../..')({});
const fileUnderTest = require('./exampleMapReduce');
// eslint-disable-next-line import/no-amd
define(['N/record', 'N/https'],

  (record, https) => {
    describe('exampleMapReduce.js', () => {
      describe('getInputData', () => {
        it('should return array', () => {
          const result = fileUnderTest.getInputData();
          expect(result).toEqual(expect.any(Array));
        });
      });
      describe('map', () => {
        it('should call submitFileds for each ticket', () => {
          const context = { value: random(1, 10) };
          const tickets = [...Array(random(1, 10))].map(() => ({
            external_id: random(1, 1000),
            id: random(1, 1000),
          }));
          const spyGet = spyOn(https, 'get').and.returnValue({ body: JSON.stringify({ tickets }) });
          const spySubmitFields = spyOn(record, 'submitFields').and.returnValue(tickets);
          fileUnderTest.map(context);
          expect(spyGet).toHaveBeenCalledWith(expect.any(Object));
          expect(spySubmitFields).toHaveBeenCalledTimes(tickets.length);
        });
      });
    });
  });
