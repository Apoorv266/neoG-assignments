const checkForAlphabetA = (val) => {
for (let i = 0; i < val.length; i++) {
    if (val[i] === "a" || val[i] === "A") { 
        return `Includes a`
    }
}
return `Does not include a`
}



console.log(checkForAlphabetA("Tanay")) // Includes a 
console.log(checkForAlphabetA("Jeep")) // Does not include a 
console.log(checkForAlphabetA("Jane")) // Includes a 