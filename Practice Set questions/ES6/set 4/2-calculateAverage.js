// Your ES6 code here

const calculateAverage = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length
}


console.log(calculateAverage([1, 2, 3, 4, 5])); // 3