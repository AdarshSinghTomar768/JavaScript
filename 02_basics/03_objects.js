//singleton object
Object.create(null);

//object literal

const mySym = Symbol("key");

const person = {
    name: "John",
    [mySym]: "value1",
    age: 30,
    location: "Mumbai",
    email: "5Pqg3@example.com"
}
console.log(person);//{ name: 'John', age: 30 }
console.log(person.email);//5Pqg3@example.com
console.log(person["email"]);//5Pqg3@example.com
console.log(person[mySym]);//value1

person.email = "JtHqj@example.com";
// Object.freeze(person);
person.email = "5Pqg3@example.com";
console.log(person);//{ name: 'John', age: 30, email: 'JtHqj@example.com' }

person.greeting = function () {
    console.log("Hello JS user");
}
person.greetingTwo = function () {
    console.log(`Hello JS user,${this.name}`);
}
person.greeting();//Hello JS user
person.greetingTwo(); //Hello JS user,John
person.greetingTwo.call({name:"John"});//Hello JS user,John