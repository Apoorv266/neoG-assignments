// Create a function changeSize that takes an object product and a string newSize as parameters, and changes the size property of the product object to the newSize. Log the product object to the console before and after calling the function.

let product = { name: 'T-Shirt', size: 'M', price: 500, color: 'Blue' }



// const changeSize = (obj,string ) => obj.size = string

const changeSize2 = (obj,string) => {
    // since product object is initialized with let we can update it with updated value but we cannot update the original object if it is initialized with const 
    product = {...obj, size: string}
    // return newObj
}



console.log(product) 
// changeSize(product, 'L')
changeSize2(product, 'L')
console.log(product) 

// we cannot spread object/array initiated with const