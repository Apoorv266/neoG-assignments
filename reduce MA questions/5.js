// Get the names of students in uppercase whose marks are greater than 50
  //Output: ['JOHN', 'WICK']


  const studentRecords = [{ name: 'John', id: 123, marks: 98 },
{ name: 'Baba', id: 101, marks: 23 },
{ name: 'yaga', id: 200, marks: 45 },
{ name: 'Wick', id: 115, marks: 75 }]

  const getVal = (array) =>{
    let newArr = array.filter((item) => item.marks > 50).map(item => item.name.toUpperCase())
    return newArr
  }
  console.log(getVal(studentRecords))