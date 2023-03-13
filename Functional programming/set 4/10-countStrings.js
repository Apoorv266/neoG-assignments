const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];
// Your code here
const freqFunc = (acc, arr) => {
    if (acc.hasOwnProperty(arr)) {
        acc[arr] = acc[arr] + 1
    }
    else{
        acc[arr] = 1
    }
    // acc.hasOwnProperty(arr) ? acc[arr] = acc[arr] + 1 : acc[arr] = 1
    return acc
}

// const result = fruits.reduce((acc, curr)=> acc[curr] ? {...acc, [curr]: acc[curr] + 1}:{...acc, [curr]: 1} 
// , {})

// const result = fruits.reduce(freqFunc, {})
console.log(result);
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }