// Given an array of objects representing books with their titles and authors, use the reduce function to create a new object that groups the books by author.


const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Brave New World', author: 'Aldous Huxley' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' },
    { title: 'Jane Eyre', author: 'Charlotte Bronte' },
    { title: 'Wuthering Heights', author: 'Emily Bronte' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  ];


  const groupFunc = (acc, arr) =>{
    if (!acc[arr.author]) {
        acc[arr.author] = []
    }
    acc[arr.author].push(arr.title)
    return acc
  }
  const result = books.reduce(groupFunc, {})
  console.log(result)


//   {
//       "F. Scott Fitzgerald": ["The Great Gatsby"],
//       "Harper Lee": ["To Kill a Mockingbird"],
//       "George Orwell": ["1984"],
//       "Aldous Huxley": ["Brave New World"],
//       "Jane Austen": ["Pride and Prejudice"],
//       "Charlotte Bronte": ["Jane Eyre"],
//       "Emily Bronte": ["Wuthering Heights"],
//       "J.D. Salinger": ["The Catcher in the Rye"]
//     }