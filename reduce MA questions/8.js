// Given an array of objects representing books, where each object has a title property, an author property, and a price property, write a function that returns the total price of all the books written by a given author.


const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 9.99 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 7.99 },
    { title: '1984', author: 'George Orwell', price: 10.99 },
    { title: 'Animal Farm', author: 'George Orwell', price: 8.99 },
];

const author = 'George Orwell'
const bookSumFunc = (acc, item, author) => {
    if (item.author === author) {
        return acc + item.price
    }
    else {
        return acc
    }
}
let result = books.reduce((acc, item)=> bookSumFunc(acc, item, author), 0)
console.log(result)