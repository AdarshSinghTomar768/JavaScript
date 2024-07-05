//for of loop for arrays and objects
let arr = [1, 2, 3, 4, 5];
for(let i of arr){
    console.log(i);
}  

//for string
let name = "Adarsh";
for(let i of name){
    console.log(i);
}   

//for map
let map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
for(let i of map){
    console.log(i);
}//[["key1", "value1"], ["key2", "value2"]]

for(let i of map.keys()){
    console.log(i);
}//key1, key2

for(let i of map.values()){
    console.log(i);                 
}//value1, value2   

for(const [key, value] of map){
    console.log(key, '=>', value);
}

//in object
let obj = {
    name: "Adarsh",
    age: 23
}
for(let i in obj){
    console.log(i, obj[i]);
}