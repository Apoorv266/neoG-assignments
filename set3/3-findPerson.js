// Your ES6 code here
const findPerson = (array, val) => {
    // let obj
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === val) {
            return array[i]
        }
    }
    // array.filter((item) => {
    //     if (item.name === val) {
    //         obj = item
    //     }
    // })
    // return obj
}


console.log(findPerson([{ name: 'Amay', age: 25 }, { name: 'Akhil', age: 25 }], "Amay"))