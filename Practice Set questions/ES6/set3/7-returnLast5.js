// with inbuilt function
const printLastFive = (arr) => arr.slice(-5)

// without inbuilt function
const printLastFive2 = (arr) => {
    let array = []
    for (let i = arr.length - 5; i < arr.length; i++){
        arr.push(arr[i])      
    }
    return array
}

console.log(printLastFive([3, 5, 6, 1, 4, 6, 3]))
console.log(printLastFive([3, 5, 6, 1, 4, 6, 3]))
// [1, 2, 3, 5, 8]