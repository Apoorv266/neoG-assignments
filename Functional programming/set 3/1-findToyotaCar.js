const cars = [
    { make: "Toyota", model: "Corolla", year: 2010 },
    { make: "Honda", model: "Civic", year: 2012 },
    { make: "Toyota", model: "Camry", year: 2015 },
    { make: "Ford", model: "Mustang", year: 2018 },
];

// Your code here
const findToyotaCar = (array) => {
    let newArr = array.find(({ make, year }) => make === "Toyota" && year > 2010)
    return newArr
}

const toyotaCar = findToyotaCar(cars);
console.log(toyotaCar);
  // Output: { make: "Toyota", model: "Camry", year: 2015 }