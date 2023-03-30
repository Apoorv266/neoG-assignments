const students = [
    { name: "John", grade: "B" },
    { name: "Mary", grade: "A" },
    { name: "Sam", grade: "C" },
    { name: "Sarah", grade: "A" },
  ];
  
  // Your code here
  const findStudentWithGradeA = array => array.find(item => item.grade === "A")

  
  const studentWithGradeA = findStudentWithGradeA(students);
  console.log(studentWithGradeA); 
  // Output: { name: "Mary", grade: "A" }