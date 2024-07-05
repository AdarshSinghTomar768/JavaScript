console.log("Hello World");
const accId = 123;
let accName = "John";
var accPass = "1234"; //dont use var in js
accCity = "Mumbai";
let accState;

/*
Prefer not to use var keyword
because of issue in block scope and function scope
*/
console.log(accId);
console.log(accName);
console.log(accPass);
console.log(accCity);
console.table([accId, accName, accPass, accCity, accState]);