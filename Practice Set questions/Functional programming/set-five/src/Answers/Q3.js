// . Create an array of objects representing books in a library. Each object has the following properties: id, title, author, and rating. Write a React component that takes the array of books as input and returns an unordered list of books, where each list item displays the book's title, author, and rating.

import React from 'react'

const Q3 = () => {
    const books = [
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 4.2 },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 4.5 },
        { id: 3, title: '1984', author: 'George Orwell', rating: 4.0 },
        { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', rating: 3.9 },
        { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', rating: 4.2 },
      ];
  return (
    <ul>
        {books.map(({id, title, author, rating}) =>(
            <li key={id}>{title}  -   {author}   -   ({rating})</li>
        ))}
    </ul>
  )
}

export default Q3