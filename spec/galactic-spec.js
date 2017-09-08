import { galacticConverter as converter}  from './../js/galacticConverter.js';

describe('GalacticAge', function() {
  it('should return a users birthday as Earth years in seconds', function() {
      console.log('jasmine test');
      let converted = new converter(25);
      expect(converted.birthday).toEqual(25);
    });
});
