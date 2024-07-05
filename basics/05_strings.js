const name = "John";
const repoCount = 100;
console.log("Hello " + name + "!");//Hello John!
console.log(`Hello my name is ${name} and I have ${repoCount} repositories`);//Hello my name is John and I have 100 repositories
const gameName = new String("Tic-Tac-Toe");
console.log(typeof gameName);//object
console.log(gameName[0]);  //T
console.log(gameName._prototype_);//undefined
console.log(gameName.length);//10
console.log(gameName.toUpperCase());//TIC-TAC-TOE
console.log(gameName.toLowerCase());//tic-tac-toe
console.log(gameName.trim());//Tic-Tac-Toe
console.log(gameName.split("-"));//[ 'Tic', 'Tac', 'Toe' ]
const newString = gameName.replace("Tic", "Tic-Tac");
console.log(newString);//Tic-Tac-Toe
const newString2 = gameName.substring(0, 3);
console.log(newString2);//Tic
const newString3 = gameName.slice(-9, 3);
console.log(newString3);//ic-T
const url = "https://github20%.com";
console.log(url.replace("github20%", "github.com"));//https://github.com
console.log(url.includes("github.com"));//true