const checkLength = (val) => {
    let num = 0
    for (let i = 0; i < val.length; i++) {
        if (num >= 5) {
            return `more than 5 characters `
        }
       num++
    }
    return `less than 5 characters`
    }
    
    
    
    console.log(checkLength("Programming")) // more than 5 characters 
console.log(checkLength("Jeep")) // less than 5 characters 