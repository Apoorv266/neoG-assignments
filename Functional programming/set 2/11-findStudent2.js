const students = [
    { name: "John", grade: "B", scholarship: false },
    { name: "Mary", grade: "A", scholarship: true },
    { name: "Sam", grade: "A", scholarship: false },
    { name: "Sarah", grade: "B", scholarship: true },
  ];
  
  // Your code here
  const findStudent = array => array.filter(({grade, scholarship}) => grade === "B" && scholarship) 
  
  
  const student = findStudent(students);
  console.log(student); 
  // Output: { name: "Sarah", grade: "B", scholarship: true }