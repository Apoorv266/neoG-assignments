const games = [
    {title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"},
    {title: "Grand Theft Auto V", developer: "Rockstar North", genre: "Action"},
    {title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle"},
    {title: "The Legend of Zelda: Breath of the Wild", developer: "Nintendo", genre: "Adventure"}
  ];
  // Your code here
  let genre = "RPG"
  const filterByGenre = (acc, arr) =>{
    if (arr.genre === genre) {
        acc.push(arr)
    }
     return acc
  }
  
  const filteredGames = games.reduce(filterByGenre, []);
  console.log(filteredGames);
  // Output: [{title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"}]