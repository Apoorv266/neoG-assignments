// Print names of the students whose grades are greater than or equal to 90

const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];


  const filterFunc = (array) =>{
let newArr = array.filter(item => item.grade >= 90)
let newArr2 = newArr.map(item => item.name)
return newArr2
  }

  console.log(filterFunc(students))