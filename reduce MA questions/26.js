const friends = [{ name: "Joey", books: ["Bible", "Harry Potter"], age: 18 }, { name: "Monica", books: ["War and peace", "Romeo and Juliet"], age: 19 }, { name: "Ross", books: ["The Lord of the Rings", "The Shining"], age: 20 }];
// return array with only books

const booksFunc = (acc, arr)=>{
//1st approach 
return [...acc, ...arr.books]
    // 2nd approach
//    arr.books.map(item => acc.push(item))
//     return acc

//3rd approach
// return acc.concat(arr.books);
}
const result = friends.reduce(booksFunc, [])
console.log(result)