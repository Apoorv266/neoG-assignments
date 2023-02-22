const book = {
    title:"Do Epic Shit",
    author:"ankur warikoo",
    pages: 20,
  }

const getBookDetails = ({pages}) => pages < 100 ? "book has less than 100 pages" : "book has more than 100 pages"


console.log(getBookDetails(book)) // logs 'true' if the pages are above 100
console.log(getBookDetails(book)) // logs 'false' if the pages are 100 or below