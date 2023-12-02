//numbers

const score = 100;
console.log(score); //100
let balance = new Number(300);
console.log(balance); // [Number: 300]

console.log(balance.toString().length); //3
balance = 300.64;
console.log(balance.toString().length); //6
console.log(balance.toFixed(2).split("")); //["3", "0", "0", ".", "6", "4"]

console.log(balance.toFixed(2)); //300.64  --> used for precision value

const otherNumber = 23.89966;

console.log(otherNumber.toPrecision(3)); //23.9   -> used for precision value but it also round off the value , it starts from left side , it convert to string

const hundred = 1000000000;
console.log(hundred.toLocaleString("en-IN")); //10,00,00,000

// ++++++++++++++++++++ Maths ++++++++++++++++++++++++

console.log(Math); //Math object

console.log(Math.abs(-100)); //100

console.log(Math.PI); //3.141592653589793

console.log(Math.E); //2.718281828459045

console.log(Math.round(4.3)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.3)); //5
console.log(Math.floor(4.6)); //4
console.log(Math.sqrt(98).toFixed(2)); //9.90
console.log(Math.pow(2, 3)); //8
console.log(Math.min(2, 3, 4, 5, 6, 7, 8, 9, 1)); //1
console.log(Math.max(2, 3, 4, 5, 6, 7, 8, 9, 1)); //9
console.log(Math.random()); //0.798863625176083

console.log((Math.random()*10) + 1);

// random function

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1)) + min);
