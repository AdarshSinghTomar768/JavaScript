const temp = 40;
if (temp > 30) {
    console.log("It's a hot day");
    console.log("Drink water");
} else if (temp > 20) {
    console.log("It's a nice day");
} else if (temp > 10) {
    console.log("It's a bit cold");
} else {
    console.log("It's cold");
}

//falsy values
let age = 0;
if (age) {
    console.log("Age is defined");
} else {
    console.log("Age is not defined");
}

//truthy values
let name = "Adarsh";
if (name) {
    console.log("Name is defined");
} else {
    console.log("Name is not defined");
}

//falsy values
//false
//0
//""
//undefined
//null
//NaN
//-0
//BigInt(0n)

//truthy values
//true
//"Adarsh"
//[]
//{}
//function(){}
//BigInt(1n)
//"0"
//"false"

const emptyObject = {};
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}//object is empty