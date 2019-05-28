import { toRomanNumeral } from '../src/scripts.js';

describe('roman-numerals', function() {

  it('should test whether a number is greater than 1000', function() {
    var num = 1000;
    expect(toRomanNumeral(num)).toEqual("M");
  });
});
