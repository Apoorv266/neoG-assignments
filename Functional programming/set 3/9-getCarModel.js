const cars = [
    { make: "Toyota", model: "Corolla", year: 2010 },
    { make: "Honda", model: "Civic", year: 2012 },
    { make: "Toyota", model: "Camry", year: 2015 },
    { make: "Ford", model: "Mustang", year: 2018 },
  ];
  
  // Your code here
  const getCarModel = (acc, {year, model}) =>{
    if (year > 2012) {
        acc.push(model)
    }
    return acc
  }
  
  const carModels = cars.reduce(getCarModel, []);
  console.log(carModels);
  // Output: ["Camry", "Mustang"]