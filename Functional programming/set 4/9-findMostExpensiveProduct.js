const products = [
    { name: "Bread", price: 10, quantity: 2 },
    { name: "Clips", price: 20, quantity: 5 },
    { name: "Knife", price: 30, quantity: 1 },
    { name: "Slipper", price: 40, quantity: 3 }
  ];
  // Your code here
const maxItemFunc = (acc, arr) => (arr.price * arr.quantity) > (acc.price * acc.quantity) ? arr : acc
  
  
  const result = products.reduce(maxItemFunc, products[0])
  console.log(result); 
  // { name: "Slipper", price: 40, quantity: 3 }