import React from 'react'
// Create an array of objects representing movies in your watchlist. Each object has the following properties: id, title, director, and runtime. Write a React component that takes the array of movies as input and generates an ordered list of movies, where each list item displays the movie's title, director, and runtime.

function Q8() {
    const movies = [
        { id: 1, title: 'The Godfather', director: 'Francis Ford Coppola', runtime: 175 },
        { id: 2, title: 'The Shawshank Redemption', director: 'Frank Darabont', runtime: 142 },
        { id: 3, title: 'The Dark Knight', director: 'Christopher Nolan', runtime: 152 },
        { id: 4, title: 'Pulp Fiction', director: 'Quentin Tarantino', runtime: 154 },
        { id: 5, title: 'Forrest Gump', director: 'Robert Zemeckis', runtime: 142 },
    ]
    return (
       <ol>
        {movies.map((item) =>{
            return <li key={item.id}>{item.title} - {item.director} - {item.runtime}  Mins</li>
        })}
       </ol>
    )
}

export default Q8