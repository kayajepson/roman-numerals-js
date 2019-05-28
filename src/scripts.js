
export function toRomanNumeral(num){
  var romanNumeralOutput = [];
  for (var i = num; i != 0; i += 0) {
  // if (i > 4000) {
  // return "Enter amount smaller than 4000";
  if (i >= 1000){
    romanNumeralOutput.push("M");
     i = (i - 1000);
       num = i;
  } else if (i >= 900) {
    romanNumeralOutput.push("CM");
     i = (i - 900);
     num = i;
  } else if (i >= 500) {
    romanNumeralOutput.push("D");
     i = (i - 500);
       num = i;
  } else if  (i >= 400){
    romanNumeralOutput.push("CD");
     i = (i - 400);
       num = i;
  } else if (i >= 100) {
    romanNumeralOutput.push("C");
     i = (i - 100);
       num = i;
  } else if (i >= 90) {
    romanNumeralOutput.push("XC");
     i = (i - 90);
       num = i;
  } else if (i >= 50) {
    romanNumeralOutput.push("L");
     i = (i - 50);
       num = i;
  }  else if (i >= 40) {
    romanNumeralOutput.push("XL");
     i = (i - 40);
       num = i;
  } else if (i >= 10) {
    romanNumeralOutput.push("X");
     i = (i - 10);
       num = i;
  } else if (i >= 9) {
    romanNumeralOutput.push("IX");
     i = (i - 9);
       num = i;
  } else if (i >= 5) {
    romanNumeralOutput.push("V");
     i = (i - 5);
       num = i;
  } else if (i >= 4){
    romanNumeralOutput.push("IV");
     i = (i - 4);
       num = i;
  } else if (i >= 1) {
    romanNumeralOutput.push("I");
     i = (i - 1);
       num = i;
  }
}
return romanNumeralOutput.join('');
}



// function toRomanSingle(num){
//     if (num === 1){
//     num = 'I'
//   } else if (num === 2 ){
//     num = 'II'
//   } else if (num === 3){
//     num = 'III'
//   }  else if (num === 4) {
//     num = 'IV'
//   } else if (num === 5) {
//     num = 'V'
//   } else if (num === 6) {
//     num = 'VI'
//   } else if (num === 7){
//     num = 'VII'
//   } else if (num === 8) {
//     num = 'VIII'
//   } else if (num === 9) {
//     num = 'IX'
//   } else if (num === 10){
//     num = 'X'
//   } else {
//     num = ''
//   }
//   return num;
// }
