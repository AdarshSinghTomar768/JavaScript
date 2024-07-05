//reduce
const muNums = [1,2,3];

const sum = muNums.reduce((acc,curr) => acc + curr,0);
console.log(sum);//6

const sum2 = muNums.reduce((acc,curr) => {
    console.log(`acc: ${acc}, curr: ${curr}`);
    return acc + curr;
},0);
console.log(sum2);//acc: 0, curr: 1
//console.log(sum2);//acc: 1, curr: 2
//console.log(sum2);//acc: 3, curr: 3 //6


const shoppingCart = [
    {productId: 1, productName: 'mobile', price: 1000},
    {productId: 2, productName: 'laptop', price: 2000},
    {productId: 3, productName: 'tv', price: 3000}, 
    {productId: 4, productName: 'watch', price: 4000}
]

const ans = shoppingCart.reduce((acc,curr) => acc + curr.price,0);
console.log(ans);//10000
