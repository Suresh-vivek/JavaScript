// Primitive  --> call by value

// 7 types : String , Number , Boolean , BigInt , undefined , null(empty) , Symbol

//Javascript is Dynamically typed language means we don't need to explicitly define datatype during declaration of a variable

const score = 100;
const scorevalue = 100.3;
const isLoggedIn = true;
const outsideTemp = null;

let userEmail; //undefined

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id);
console.log(anotherId);
console.log(id === anotherId); //false
const bigNumber = 1233443252142342522n


// Refrence (Non-primitive)

//Array , Objects , Functions
const heros = ["Shaktiman" , "nagraaj", "dhruv" , "Doga"]

let myObj = {
    name: "Vivek",
    age : 21,
}

const myFun = function(){
    console.log("I am a function")
}


// ++++++++++++++++++++ Memory Allocation ++++++++++++++++++++++++

// Stack -> primitive, Heap -> Refrence

let myName = "Vivek";
let anotherName = myName;
anotherName = "Rahul";
console.log(myName); //Vivek
console.log(anotherName); //Rahul


let userOne ={
    email :"user@google.com",
    upi: "user@ybl",
}

let UserTwo = userOne;

UserTwo.email="vivek@google.com";
console.log(userOne.email); //vivek@google
console.log(UserTwo.email); //vivek@google