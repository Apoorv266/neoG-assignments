const products = [
    { name: 'Shirt', price: 20, quantity: 2 },
    { name: 'Pants', price: 30, quantity: 1 },
    { name: 'Shoes', price: 50, quantity: 1 },
    { name: 'Hat', price: 10, quantity: 3 },
  ];
  
  // Your code here
  const getTotalCost = (acc, arr) => acc + (arr.price * arr.quantity)

  let result = products.reduce(getTotalCost, 0)
  console.log(result); 
  // Output: 150