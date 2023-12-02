//Strings

//Strings are used to store and manipulate text.

//Strings can be created using single or double quotes.

//Strings can be concatenated using the + operator.

//Strings have a length property.

const name = "Vivek";
const repoCount = 23;

console.log(name + repoCount + "repos"); //outdated Syntax

console.log(`${name} has ${repoCount} repos`); //ES6 Syntax -> String interpolation

//Methods

// 1. Declaration
const gameName = new String("Suresh-vivek");

console.log(gameName[0]); //S
console.log(gameName.__proto__); //{}

console.log(gameName.length); //12
console.log(gameName.toUpperCase()); // SURESH-VIVEK
console.log(gameName.toLowerCase()); // suresh-vivek

console.log(gameName.charAt(5)); //h

console.log(gameName.indexOf("h")); //5

const newString = gameName.substring(0, 5); //can't use negative values
console.log(newString); //Sures

const newString2 = gameName.slice(0, 5); //Sures
console.log(newString2);

const newString3 = gameName.slice(-5, 12); //
console.log(newString3); // vivek

const newString4 = "  Vivek     "; //this type of situation are arises when we take input from user using forms and we want to remove extra spaces
console.log(newString4); //  Vivek
console.log(newString4.trim()); //Vivek

const url = "https://vivek.com/vivek%20kumar"; // webbrowser don't understand spaces so we use encodeURI() and decodeURI() to encode and decode url respectively

console.log(url.replace("%20", "-")); // https://vivek.com/vivek-kumar

console.log(url.includes("vivek")); //true
console.log(url.includes("suresh")); //false"


console.log(gameName.split("-")); //["Suresh", "vivek"]

console.log(gameName.split("")); //["S", "u", "r", "e", "s", "h", "-", "v", "i", "v", "e", "k"]