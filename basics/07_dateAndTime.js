// Date

let myDate = new Date();
console.log(myDate);
console.log(myDate.toLocaleString());//9/10/2021, 12:00:00 AM
console.log(myDate.toDateString());//Wed Sep 10 2021
console.log(myDate.toTimeString());//12:00:00 AM
console.log(myDate.getFullYear());//2021
console.log(myDate.getMonth());//8
console.log(typeof myDate);//object

let myDate2 = new Date(2021, 8, 10, 12, 30, 0, 0);
console.log(myDate2.toLocaleString());//10/9/2021, 12:30:00 AM

let myDate3 = new Date(2021, 8, 10, 12, 30, 0, 0);
myDate3.setFullYear(2022);
console.log(myDate3.toDateString());//Wed Sep 10 2022

//customize date
myDate.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'   
})