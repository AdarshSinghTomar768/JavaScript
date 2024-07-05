// Primitive data types
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

// Reference data types
// 1. Object
// 2. Array
// 3. Function
// 4. Date
// 5. RegExp
// 6. Error
// 7. Map
// 8. Set
// 9. WeakMap
// 10. WeakSet
// 11. Promise
// 12. BigInt
// 13. JSON


// Stack memory (Primitive data types) and Heap memory (Reference data types)


const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); //false


const heros = ["Iron Man", "Spider Man", "Captain America"];
let myObj = {
    name: "Adarsh",
    age: 25
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof myFunction); //function
console.log(typeof anotherId); //symbol