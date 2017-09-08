import { galacticConverter as converter}  from './../js/galacticConverter.js';

describe('GalacticAge', function() {
  it('should convert years to seconds', function() {
      let converted = new converter(25);
      expect(converted.yearsToSeconds(1)).toEqual(31557600);
    });
  it('should return the current year', function() {
      let today = new Date();
      expect(today.getFullYear()).toEqual(2017);
    });
  it('should return the current month', function() {
      let today = new Date();
      expect(today.getMonth()).toEqual(8);
    });
  it('should return the current day', function() {
      let converted = new converter(25);
      expect(converted.getTodaysDate()).toEqual("2017-8-8");
    });
  it('should return a users birthday as Earth years in seconds', function() {
      console.log('jasmine test');
      let converted = new converter(25);
      expect(converted.birthday).toEqual(25);
    });
});
