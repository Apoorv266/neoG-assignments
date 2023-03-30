// Your ES6 code here
const filterByScore = (array) => {
    let newArr = array.filter(item => item.score > 80)
    return newArr
}


const students = [
    { name: 'Aditya', score: 85 },
    { name: 'Bob', score: 75 },
    { name: 'Charlie', score: 90 }
];

console.log(filterByScore(students));
  // Output: [{ name: 'Aditya', score: 85 }, { name: 'Charlie', score: 90 }]