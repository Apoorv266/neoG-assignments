// Write a program to find out the maximum and minimum number in an array by using only one reduce method

const input = [6, 12, 4, 1, 2]
// Output: {min:1, max: 14}

// let max = -Infinity
// let min = Infinity
// const charFunc = (acc, arr) => {
//     if (acc.max < arr) {
//         max = arr
//     }
//     if (min > arr) {
//         min = arr
//     }
//     return { min: min, max: max }
// }


const charFunc = (acc, cur) => {
    return {
        min: cur < acc.min ? cur : acc.min,
        max: cur > acc.max ? cur : acc.max
    }
}


// return {
//     min: (acc.min < cur) ? acc.min : cur,
//     max: (acc.max > cur) ? acc.max : cur
//   };

let result = input.reduce(charFunc, { min: input[0], max: input[0] })
console.log(result)