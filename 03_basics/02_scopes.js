var c = 300
let a = 10

if(true){
    let a = 100
    const b = 200
    var c = 30

    console.log(a)//100
    console.log(b)//200
    console.log(c)//30  
}
    console.log(a)//10
 //   console.log(b)//error
    console.log(c)//30


function one(){
    const username = "Adarsh"

     function two(){
        const website = "youtube.com"
        console.log(username);//Adarsh
    }
 //       console.log(website);//error
        two()
}

one()

if(true){
    const username = "Adarsh"
    if (user === "Adarsh") {
        const website = "youtube.com"
        console.log(username + website);
    }
    console.log(website);//error
}
console.log(username);//error


addone(5) //6
function addone(num){
    return num+1
}


addTwo(5)//error
const addTwo = function(num){
    return num+2
}
