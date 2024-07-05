const score = 400;
console.log(score); //400

const balance = new Number(100);
console.log(balance); //100

console.log(typeof score); //number
console.log(typeof balance); //object
console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3)); //23.9

const otherNumber2 = 123.8966;
console.log(otherNumber2.toPrecision(3)); //124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000 
//**********************Maths****************************************
console.log(Math); //object
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.6)); //5
console.log(Math.floor(4.6)); //4
console.log(Math.trunc(4.6)); //4
console.log(Math.sign(-4)); //-1
console.log(Math.pow(2, 3)); //8
console.log(Math.sqrt(64)); //8
console.log(Math.max(1, 2, 3, 4, 5, 6)); //6
console.log(Math.min(1, 2, 3, 4, 5, 6)); //1
console.log(Math.random()); //0.123456789
console.log(Math.PI); //3.141592653589793
console.log(Math.E); //2.718281828459045
console.log(Math.random()*10); // 1.23456789

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1)+min)); //15