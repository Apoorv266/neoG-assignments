const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
  ];
  
  // Your code here

  // In the case where the item.pageCount is greater than 700, it is pushing the item.title to the acc array, but it is not returning the updated acc array. As a result, the return value of acc.push(item.title) is the new length of the acc array, which is always 1 after the first push.(for below code)

  // const getTitlesWithMoreThan500Pages = (acc, item) =>item.pageCount>700 ? acc.push(item.title) : acc

  const getTitlesWithMoreThan500Pages = (acc, item) =>
  item.pageCount > 700 ? [...acc, item.title] : acc;
   
  // DOUBT why above code is returning  ("1")


  const getTitlesWithMoreThan500Pages1 = (acc, item) =>{
    if (item.pageCount>700) {
      acc.push(item.title)
    }
    return acc
  }
  
  
  const booksWithMoreThan500Pages = books.reduce(getTitlesWithMoreThan500Pages, []);
  const booksWithMoreThan500Pages1 = books.reduce(getTitlesWithMoreThan500Pages1, [])
  console.log(booksWithMoreThan500Pages);
  console.log(booksWithMoreThan500Pages1); 
  // Output: ["The Lord of the Rings"]