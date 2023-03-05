// Problem Statement: We are interested in retrieving only the name of the students and all the names should be in caps.
//Output: ['JOHN', 'BABA', 'YAGA', 'WICK']
studentRecords = [{ name: 'John', id: 123, marks: 98 },
{ name: 'Baba', id: 101, marks: 23 },
{ name: 'yaga', id: 200, marks: 45 },
{ name: 'Wick', id: 115, marks: 75 }]



const capsFunc = (array) => array.map(item => item.name.toUpperCase())
console.log(capsFunc(studentRecords))