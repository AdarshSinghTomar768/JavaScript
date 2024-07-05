const value = 3
switch(value){
    case 1:
        console.log("Value is 1");
        break;
    case 2:
        console.log("Value is 2");
        break;
    case 3:
        console.log("Value is 3");
        break;
    default:
        console.log("Value is not 1, 2 or 3");
        break;
}

//false == 0 => true
//false == "" => true
//false == undefined => true
//false == null => true
//false == NaN => true


//Nullish Coalescing Operator (??):null or undefined
const name = null ?? "Adarsh";
console.log(name);//Adarsh

const name2 = undefined ?? "Adarsh";
console.log(name2);//Adarsh

//Ternary Operator
// condition ? true : false

const cold = ice ? "Cold" : "Not Cold";
console.log(cold);//Cold