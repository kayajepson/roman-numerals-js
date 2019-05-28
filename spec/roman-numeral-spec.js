import { toRomanNumeral } from '../src/scripts.js';

describe('roman-numerals', function() {

  it('should test whether a number is equal to 1000', function() {
    var num = 1000;
    expect(toRomanNumeral(num)).toEqual("M");
  });

  it('should test whether a number is equal to 900', function() {
    var num = 900;
    expect(toRomanNumeral(num)).toEqual("CM");
  });

  it('should test whether a number is equal to 500', function() {
    var num = 500;
    expect(toRomanNumeral(num)).toEqual("D");
  });

  it('should test whether a number is equal to 400', function() {
    var num = 400;
    expect(toRomanNumeral(num)).toEqual("CD");
  });

  it('should test whether a number is equal to 100', function() {
    var num = 100;
    expect(toRomanNumeral(num)).toEqual("C");
  });

  it('should test whether a number is equal to 90', function() {
    var num = 90;
    expect(toRomanNumeral(num)).toEqual("XC");
  });

  it('should test whether a number is equal to 50', function() {
    var num = 50;
    expect(toRomanNumeral(num)).toEqual("L");
  });
  it('should test whether a number is equal to 40', function() {
    var num = 40;
    expect(toRomanNumeral(num)).toEqual("XL");
  });
  it('should test whether a number is equal to 10', function() {
    var num = 10;
    expect(toRomanNumeral(num)).toEqual("X");
  });
  it('should test whether a number is equal to 9', function() {
    var num = 9;
    expect(toRomanNumeral(num)).toEqual("IX");
  });
  it('should test whether a number is equal to 5', function() {
    var num = 5;
    expect(toRomanNumeral(num)).toEqual("V");
  });
  it('should test whether a number is equal to 4', function() {
    var num = 4;
    expect(toRomanNumeral(num)).toEqual("IV");
  });
  it('should test whether a number is equal to 1', function() {
    var num = 1;
    expect(toRomanNumeral(num)).toEqual("I");
  });


});
