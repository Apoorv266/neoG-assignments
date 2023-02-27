// Your ES6 code here
const getValues = (array, val) => {
    let arr = []
    for (const value of array) {
        arr[arr.length] = value[val]
    }
    return arr
}

// alternative way?
// how to do it with filter?
const getValues1 = (array, val) => {
    let newval = array.filter((item) => item[val])
    return newval
}


console.log(
    getValues(
        [
            { name: "John", age: 21 },
            { name: "Mary", age: 22 },
            { name: "Peter", age: 23 }
        ],
        "name"
    )
); // ["John", "Mary", "Peter"]