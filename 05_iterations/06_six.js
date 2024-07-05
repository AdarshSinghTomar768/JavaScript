const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers.map((num) => num * 2);
console.log(newNums);//[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const newNums2 = myNumbers.map((num) => num * 3).map((num) => num + 1)
    .filter((num) => num % 2 === 0).map((num) => num + 1);
console.log(newNums2);//[5, 11, 17, 23, 29]