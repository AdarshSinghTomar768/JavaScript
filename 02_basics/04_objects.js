const tinderUser = new Object();//Singleton
console.log(tinderUser);//{}

const tinderUser2 = {};//Object literal
console.log(tinderUser2);//{}
tinderUser2.name = "John";
tinderUser2.age = 30;
tinderUser2.location = "Mumbai";
console.log(tinderUser2);//{name: 'John', age: 30, location: 'Mumbai'}

const regularUser = {
    email: "5Pqg3@example.com",
    fullname: {
        userfullname: {
            firstname: "John",
            lastname: "Doe"
        }
    }
}
console.log(regularUser.fullname);//{ userfullname: { firstname: 'John', lastname: 'Doe' } }


const obj1 = {1: "a", 2: "b", 3: "c"};
const obj2 = {4: "a", 5: "b", 6: "c"};
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);//{ 1: 'a', 2: 'b', 3: 'c', 4: 'a', 5: 'b', 6: 'c' }
const obj4 = {...obj1, ...obj2};
console.log(obj4);//{ 1: 'a', 2: 'b', 3: 'c', 4: 'a', 5: 'b', 6: 'c' }

console.log(Object.keys(tinderUser2));//[ 'name', 'age', 'location' ]
console.log(Object.values(tinderUser2));//[ 'John', 30, 'Mumbai' ]
console.log(Object.entries(tinderUser2));//[ [ 'name', 'John' ], [ 'age', 30 ], [ 'location', 'Mumbai' ] ]

console.log(tinderUser2.hasOwnProperty("name"));//true
console.log(tinderUser2.hasOwnProperty("email"));//false

const course = {
    coursename: "JS",
    price: 1000,
    courseInstructor:"Adarsh"
}   

const {courseInstructor: instructor} = course;
//console.log(courseInstructor);//Adarsh
console.log(instructor);//Adarsh