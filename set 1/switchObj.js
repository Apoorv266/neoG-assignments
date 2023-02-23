let person = { name: 'Amit', age: 25, occupation: 'Software Engineer' }



const changeOccupation = (obj, string)  =>{
obj.occupation = string
return obj
}

// how to solve this question using object destructuring ???????? 

// const changeOccupation = (obj, string)  =>{
// return {...obj, occupation : string}
// }





console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to the console
changeOccupation(person, 'Product Manager');
console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Product Manager' } to the console