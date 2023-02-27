// without inbuilt function
const capitalizeWords = (array) => {
    let arr = []
    for (let i = 0; i < array.length; i++) {
            arr[arr.length] = array[i].toUpperCase()
    }
    return arr
}


console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]))
// ["EAT", "SLEEP", "CODE", "REPEAT"]