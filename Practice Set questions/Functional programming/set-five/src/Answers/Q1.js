// Create an array of objects representing movies in your watchlist. Each object has the following properties: id, title and director. Write a React component that takes the array of movies as input and returns an unordered list of movies, where each list item displays the movie's title and director.

import React from 'react'

const Q1 = () => {
    const movies = [
        { id: 1, title: 'The Shawshank Redemption', director: 'Frank Darabont' },
        { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola' },
        { id: 3, title: 'The Dark Knight', director: 'Christopher Nolan' },
        { id: 4, title: '12 Angry Men', director: 'Sidney Lumet' },
      ];
      return (
        <ul>
            <h1>Movies list</h1>
          {movies.map(movie => (
            <li key={movie.id}>
              {movie.title} - {movie.director}
            </li>
          ))}
        </ul>
      );
}

export default Q1
