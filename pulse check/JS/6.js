// Write a function findSnack that takes an array of snacks objects and a name as parameters and returns the object with the matching name, or null if not found. Avoid using in-built methods.

const findSnack=(array, param) =>{
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === param) return array[i]
    }
    return null
}


console.log(
    findSnack(
      [
        { name: 'Kurkure', quantity: 20 },
        { name: 'Takatak', quantity: 40 },
      ],
      'lays',
    ),
  ) // console.log(null)