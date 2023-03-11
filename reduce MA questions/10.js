// Given an array of strings, write a function that returns an array of objects representing each unique string and its frequency in the original array.

const strings = ['apple', 'banana', 'apple', 'cherry', 'cherry', 'cherry'];

const freqFunc = (array) => {
    let newArr = []
    let obj = {}
    for (let i = 0; i < array.length; i++) {
        if (obj.hasOwnProperty(array[i])) {
            obj[array[i]] = obj[array[i]] + 1
        }
        else {
            obj[array[i]] = 1
        }
    }
    console.log(obj)
    for (const key in obj) {
        let newObj = {}
        newObj["string"] = key
        newObj["frequency"] = obj[key]
        newArr.push(newObj)
    }
    return newArr
}

const result = freqFunc(strings)
console.log(result)





const num = [5, 2, 5];

const getFreq = (num) => num.reduce((acc, cur) => {
    const numPrsent = acc.some(ele => ele.number === cur);
    console.log("numPrsent", numPrsent)

    if (numPrsent) {
        return acc.map((obj) => obj.number === cur ? {
            ...obj,
            frequency: obj.frequency + 1
        } : obj)
    } else {
        return [...acc, {
            number: cur,
            frequency: 1
        }]
    }
},
    [])

console.log(getFreq(num))
