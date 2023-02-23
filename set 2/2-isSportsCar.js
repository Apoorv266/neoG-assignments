const car1 = { make: 'Porsche', model: '911', horsepower: 450 };
const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 };


const isSportsCar = ({horsepower}) => horsepower > 300 

console.log(isSportsCar(car1)); // true
console.log(isSportsCar(car2)); // false