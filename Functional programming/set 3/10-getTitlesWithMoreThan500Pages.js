const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
  ];
  
  // Your code here
  // const getTitlesWithMoreThan500Pages = (acc, item) =>item.pageCount>700 ? acc.push(item.title) : acc
   
  // DOUBT why above code is returning  ("1")


  const getTitlesWithMoreThan500Pages = (acc, item) =>{
    if (item.pageCount>700) {
      acc.push(item.title)
    }
    return acc
  }
  
  
  const booksWithMoreThan500Pages = books.reduce(getTitlesWithMoreThan500Pages, []);
  console.log(booksWithMoreThan500Pages); 
  // Output: ["The Lord of the Rings"]