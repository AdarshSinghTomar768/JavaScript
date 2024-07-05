//Array
const myArr = [1, 2, 3, 4, 5];
console.log(myArr); //[1, 2, 3, 4, 5]
console.log(myArr[0]); //1
console.log(myArr[1]); //2
console.log(myArr[4]); //5
console.log(myArr[5]); //undefined
console.log(myArr.length); //5

const myArr2 = new Array(1, 2, 3, 4, 5);

myArr.push(6);
console.log(myArr); //[1, 2, 3, 4, 5, 6]
myArr.pop();
console.log(myArr); //[1, 2, 3, 4, 5]
myArr.unshift(0);//add at start
console.log(myArr); //[0, 1, 2, 3, 4, 5]
myArr.shift();//remove from start
console.log(myArr); //[1, 2, 3, 4, 5]

console.log(myArr.includes(9)); //false
console.log(myArr.indexOf(9)); //-1

const newArr = myArr.join();
console.log(newArr); //"1,2,3,4,5"
console.log(myArr); //[1, 2, 3, 4, 5]

//slice and splice
console.log(myArr.slice(1, 3)); //[2, 3]
console.log(myArr.splice(1, 3)); //[2, 3, 4]
console.log(myArr); //[1, 5]
//splice returns the deleted elements and slice doesn't