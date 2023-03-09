const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
  ];
  
  // Your code here
  //with filter
  const findBookWithMoreThan500Pages = array => array.find(item => item.pageCount > 500)


//   //with reduce
//   const findBookWithMoreThan500Pages2 = (acc, item) => {
//     if (item.pageCount > 500) {
//         return item 
//     }
//     else{
//         return acc
//     }
//   }
  


  const bookWithMoreThan500Pages = findBookWithMoreThan500Pages(books);
  const bookWithMoreThan500Pages2 = books.reduce(findBookWithMoreThan500Pages2, {});
  console.log(bookWithMoreThan500Pages); 
  console.log(bookWithMoreThan500Pages2); 


  var fruits = ["Banana", "Orange", "Apple", "Mango"];

  // At position 2, add 2 elements, remove 1: 
  console.log(fruits.splice(1));
  console.log(fruits)
  // Output: { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 }