const students = [
    { name: 'John', score: 80 },
    { name: 'Jane', score: 90 },
    { name: 'Bob', score: 75 },
    { name: 'Alice', score: 85 },
  ];
  
  // Your code here
  const getAverageScore = (acc, {score}) => acc + score
  
  let result = students.reduce(getAverageScore, 0)/students.length
  console.log(result); 
  // Output: 82.5