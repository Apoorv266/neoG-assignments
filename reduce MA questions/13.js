// Given an array of strings, use the reduce function to convert it to snake case string
const strings = ['hello', 'world', 'how', 'are', 'you'];
// output: hello_world_how_are_you


const snakeFunc = (acc, curr, index) => {
    if (index === 0) {
        return `${curr}${acc}`
    }
    return `${acc}_` + `${curr}`
}

// const snakeFunc = (acc, curr, index) => {
//     if (index === curr.length) {
//         return `${curr}${acc}`
//     }
//     return `${acc}_` + `${curr}`

// }
const result = strings.reduce(snakeFunc, "")
console.log(result)