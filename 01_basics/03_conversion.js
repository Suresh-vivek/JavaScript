let score = "33";

console.log(typeof score); //string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number

score = "33abc";
let scoreInNumber = Number(score);
console.log(scoreInNumber); //NaN

score = null;
let score2 = Number(score);
console.log(score2); //0

score = undefined;
let score3 = Number(score);
console.log(score3); //NaN

score = true;
let score4 = Number(score);
console.log(score4); //1   //0 in case of false

score = "vivek";
let score5 = Number(score);
console.log(score5); //NaN

// when we convert  to number
//"33" => 33
// "33abc" =>NaN
// null =>0
// undefined =>NaN
// true => 1
// false =>0
//"vivek" =>NaN

let isLoggedIn = "vivek";

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn); // true

//  when converted to Boolean
// 1 => true , 0 => false
// "vivek" => true
//"" =>false
let stringNumber = 56;
let number2 = String(stringNumber);
console.log(number2);
console.log(typeof number2);

// ****************** Operations *******************88

let value = 3;

let negvalue = -value;
console.log(negvalue); // -3

console.log(2 + 2); //4
console.log(2 - 2); //4
console.log(2 * 2); //4
console.log(2 ** 3); //8
console.log(2 / 3); //0.666
console.log(2 % 3); //2

let str1 = "hello";
let str2 = " vivek";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log(typeof ("1" + 2)); //string
console.log("1" + 2 + 2); //122
console.log(typeof ("1" + 2 + 2)); //string

console.log(1 + 2 + "2"); // 32
console.log(typeof (1 + 2 + "2")); //string

console.log(true); //true
console.log(+true); // 1

console.log(+""); //0

let gameCounter = 100;
gameCounter++;
console.log(gameCounter) ;
