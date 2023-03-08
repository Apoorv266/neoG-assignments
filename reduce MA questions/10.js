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