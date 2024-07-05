const marvel_heros = ["Iron Man", "Captain America","Hulk"];
const dc_heros = ["Superman", "Batman", "Flash"];

const all_heros =marvel_heros.concat(dc_heros);
console.log(all_heros);//[ 'Iron Man', 'Captain America', 'Hulk', 'Superman', 'Batman', 'Flash' ]

//using spread operator 
const all_heros2 = [...marvel_heros, ...dc_heros];
console.log(all_heros2);//[ 'Iron Man', 'Captain America', 'Hulk', 'Superman', 'Batman', 'Flash' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6 ,7 , [4 ,5]]];
const flat_array = another_array.flat(Infinity);
console.log(flat_array);//[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Adarsh"));//false
console.log(Array.from("Adarsh"));//[ 'A', 'd', 'a', 'r', 's', 'h' ]
console.log(Array.from({name:"Adarsh", age: 24}));//[[ 'A', 'd', 'a', 'r', 's', 'h' ] []


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]
