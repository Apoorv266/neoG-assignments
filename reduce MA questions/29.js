// count number of each new fruit

const fruits = [
    { apple: 4, orange: 7, grape: 3 },
    { guava: 6, lemon: 4, banana: 8 },
    { orange: 5, pineapple: 7, apple: 7 }
];


// First method

let obj = {}
for (let j = 0; j < fruits.length; j++) {
    let CurrObj = fruits[j]
    let array = Object.keys(fruits[j])

    for (let i = 0; i < array.length; i++) {
        if (obj.hasOwnProperty(array[i])) {
            obj[array[i]] = obj[array[i]] + CurrObj[array[i]]
        } else {
            obj[array[i]] = CurrObj[array[i]]
        }
    }
}


// console.log(obj)


// 2nd method

let value = fruits.reduce((acc, arr) =>{
Object.keys(arr).forEach(element => {
        console.log(arr[element], element)
        //arr[element] checkes if key existes or not if it existes then take its value
    acc[element] = (arr[element] || 0) + arr[element]
});
console.log(acc)
return acc
}, {})

console.log(value)
