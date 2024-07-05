//for each loop doesnot return the value
//so we use filter

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = arr.filter((x) => x % 2 === 0);
console.log(even);//[2, 4, 6, 8, 10]

const books = [
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        year: 1988
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    }
];
let newBooks = books.filter((book) => book.year > 1950);
console.log(newBooks);//[ { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 } ]

let newBooks2 = books.filter((book) => book.year > 1950).map((book) => book.title);//['The Catcher in the Rye', 'To Kill a Mockingbird', '1984']