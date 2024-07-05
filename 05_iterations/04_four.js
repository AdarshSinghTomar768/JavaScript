//for each loop
let arr = [1, 2, 3, 4, 5];
arr.forEach(function(element){
    console.log(element);
})  
 //with arrow
arr.forEach((element) => {
    console.log(element);
})

function printElement(element){
    console.log(element);
}
arr.forEach(printElement)

arr.forEach((item,index,arr) => {
    console.log(item,index,arr);
})


// in object
const myCoding = [
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languagename: "python",
        languagefilename: "py"  
    },
    {
        languagename: "java",
        languagefilename: "java"
    }
]

myCoding.forEach((item) => {
    console.log(item.languagename); //javascript python java
})