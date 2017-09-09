import { galacticConverter as converter}  from './../js/galacticConverter.js';

describe('GalacticAge', function() {
  it('should convert years to seconds', function() {
      let converted = new converter("1991-11-25");
      expect(converted.yearsToSeconds(1)).toEqual(31556926);
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
      let converted = new converter("1991-11-25");
      let today = new Date();
      expect(converted._getTodaysDate()).toEqual(`${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`);
    });
  //These next THREE tests need to be updated based on todays date whenever
  //Developer is running the tests
  //Throw your own birthday in there to test faster
  it('should calculate age properly if birthday is today', function() {
      let converted = new converter("1991-8-8");
      expect(converted._calculateYears()).toEqual(26);
    });
  it('should calculate age properly if birthday is tomorrow', function() {
      let converted = new converter("1991-8-12");
      expect(converted._calculateYears()).toEqual(25);
    });
  it('should calculate age properly if birthday was yesterday', function() {
      let converted = new converter("1991-8-7");
      expect(converted._calculateYears()).toEqual(26);
    });
  it('should calculate age for mercury', function() {
      let converted = new converter("1991-8-7");
      expect(converted.calculateAgeByPlanet("mercury")).toEqual("108.333");
    });
  it('should calculate age for venus', function() {
      let converted = new converter("1991-8-7");
      expect(converted.calculateAgeByPlanet("venus")).toEqual("41.935");
    });
  it('should calculate age for mars', function() {
      let converted = new converter("1991-8-7");
      expect(converted.calculateAgeByPlanet("mars")).toEqual("13.830");
    });
  it('should calculate age for jupiter', function() {
      let converted = new converter("1991-8-7");
      expect(converted.calculateAgeByPlanet("jupiter")).toEqual("2.192");
    });
});
