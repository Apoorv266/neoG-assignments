const isHelloPresent = (val) =>{
let newVal = val.split(" ")

for (let i = 0; i < newVal.length; i++) {
    if (newVal[i].toLowerCase() === "hello") {
        return true
    }
}
return false
}


console.log(isHelloPresent("Hello World")) // true
console.log(isHelloPresent("World")) // false