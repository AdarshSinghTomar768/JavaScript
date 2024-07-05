function sayMyName(){
    console.log("My Name is Adarsh");
}
sayMyName();//My Name is Adarsh

function addTwoNumbers(num1, num2){
    console.log(num1+num2);
}
addTwoNumbers(10,20);//30

function addTwoNumbers2(num1, num2){
    let result = num1+num2;
    return result;
}
let sum = addTwoNumbers2(10,20);
console.log(sum);//30

function addTwoNumbers3(num1, num2){
    return num1+num2;
}
let sum2 = addTwoNumbers3(10,20);
console.log(sum2);//30

function loginUserName(userName){
    if(!userName || userName === undefined){
        console.log("Please provide user name");
        return
    }
    return `${userName} is logged in`;
}
console.log(loginUserName("Adarsh"))//Adarsh is logged in
console.log(loginUserName())//Please provide user name   //undefined

function loginUserName1(userName = "Sam"){
if(!userName){
    console.log("Please provide user name");
    return
}
return `${userName} is logged in`;
}
console.log(loginUserName1("Adarsh"))//Adarsh is logged in

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(10,20,30,40))//[10, 20, 30, 40]


const user = {
    name: "Adarsh",
    price: 100
}

function handleObject(anyobject){
    console.log(`User name is ${anyobject.name} and price is ${anyobject.price}`);
}
//handleObject(user);
handleObject({
    name: "Adarsh",
    price: 100
})


const mynewArr = [1, 2, 3, 4, 5];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(mynewArr))//2