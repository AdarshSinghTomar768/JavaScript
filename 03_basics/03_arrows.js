const user = {
    name: "Adarsh",
    price: 100,

    welcomeMessage: function() {
        console.log(`${this.name} ,welcome to website`);
        console.log(this);//{ name: 'Adarsh', price: 100, welcomeMessage: [Function: welcomeMessage] }
    }
}
// user.welcomeMessage();//Adarsh ,welcome to website
// user.name = "John";
// user.welcomeMessage();//John ,welcome to website
//console.log(this);//{}


function chai(){
    let name = "Adarsh";
    console.log(this.name);//undefined
}

chai()


// const chai = () => {
//     let name = "Adarsh";
//     //console.log(this.name);//undefined
// }

// chai()

const addTwo = (num1,num2) => {
    return num1+num2
}

console.log(addTwo(2,3))//addTwo(3,4)

const addTwo3 = (num1,num2) => (num1+num2)
console.log(addTwo3(3,4))

const addTwo4 = (num1,num2) => ({name:"Adarsh"})
console.log(addTwo4(3,4))