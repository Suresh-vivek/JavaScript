const accountID = 65431;
let accountName = "vivek";
var password = "981234";

// accountID = 12345; // Error

console.log(accountName);

/*
prefer not to use var because of global scope 
const , let are block scoped */

console.table([accountID, accountName, password]);
