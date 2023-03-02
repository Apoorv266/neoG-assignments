// Your ES6 code here

// with inbuilt function
const filterWords = (array) => array.filter((item) => item.length > 5)


// without inbuilt function
const filterWords2 = (array) => {
    let arr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 5) {
            arr[arr.length] = array[i]
        }

    }
    return arr
}

var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words)) // ["repeat", "community"]
console.log(filterWords2(words)) // ["repeat", "community"]