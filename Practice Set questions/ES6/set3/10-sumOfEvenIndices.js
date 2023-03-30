// Your ES6 code here
const sumOfEvenIndices = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i = i + 2) {
        sum += array[i]
    }
    return sum
}


console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])) // 6
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])) // 30