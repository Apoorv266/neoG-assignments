// Your ES6 function here
const getCityNames = (array) => {
    let newArr = array.map(item => item.name)
    return newArr
}


const cities = [
    { name: 'New York', population: 8538000 },
    { name: 'Los Angeles', population: 3976000 },
    { name: 'Bangalore', population: 13608000 }
];

console.log(getCityNames(cities));
// Output: ["New York", "Los Angeles", "Bangalore"]


// self question - convert first letter of each city name in array to upperCase

const toUpperCaseFunc = (array) => {
    let newArr = array.map(item => getChartoCap(item.name))
    return newArr
}

const getChartoCap = (item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
}


const cities1 = [
    { name: 'new York', population: 8538000 },
    { name: 'los Angeles', population: 3976000 },
    { name: 'bangalore', population: 13608000 }
];

console.log(toUpperCaseFunc(cities1))