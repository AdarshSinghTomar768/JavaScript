// Immediately Invoked Function Expression
(function(){
    console.log("IIFE");
})();

((name) => {
    console.log(`DB connected two ${name}`);
})('Adarsh')