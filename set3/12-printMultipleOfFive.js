// Your ES6 code here
const printMultipleOfFive = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 5 === 0) {
            return array[i] 
        }
    }
    return undefined;
}


console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])) // 10
console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])) // 5