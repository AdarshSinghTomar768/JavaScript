for(let i = 0; i < 10; i++){
    console.log(i);
}


for(let i = 0; i < 10; i++){
    console.log(`Outer loop value: ${i}`);
    for(let j = 0; j < 10; j++){
        console.log(`Inner loop value: ${j}`);
    }       
}

//break and continue

for(let i = 0; i < 10; i++){
    if(i === 5){
        break;
    }
    console.log(`Deteceted value: ${i}`);
    for(let j = 0; j < 10; j++){
        if(j === 5){
            break;
        }
        console.log(`Inner loop value: ${j}`);
    }       
}