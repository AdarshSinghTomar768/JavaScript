let score = "100abc";
let num = null;
console.log(typeof score); //string
console.log(typeof(score)); //string

let scoreNum = Number(score);
let num2 = Number(num);
console.log(typeof scoreNum); //number
console.log(scoreNum); //NaN
console.log(num); //null
console.log(num2); //0
// for undefined we will get NaN
//0 => false
//1 => true
//NaN => false
//"" => false
//"Adarsh" => true
let isLoggedIn = 100;
let booleanLoggedIn = Boolean(isLoggedIn);
console.log(booleanLoggedIn); //true

//*********************operation ***************************************        

let a = 10;
let negVal = -a;
console.log(negVal); //-10

//2**3 = 2*2*2 = 8

let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2;
console.log(str3); //Hello World

console.log("1" + 2 + 3); //123
console.log(1 + 2 + "3"); //33

console.log(true); //true
console.log(+true); //1