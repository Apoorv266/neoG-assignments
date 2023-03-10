// Write a function that uses reduce to calculate the total revenue generated by the store from all the orders. Assume that the revenue from each order is the sum of the prices of all the items in the order.

const orders = [
  { id: 1, items: [{ name: 'book', price: 10 }, { name: 'pen', price: 2 }] },
  { id: 2, items: [{ name: 'shirt', price: 20 }, { name: 'pants', price: 30 }] },
  { id: 3, items: [{ name: 'hat', price: 15 }, { name: 'socks', price: 5 }] },
];


const sumFunc = (acc, arr)=> acc +  arr.items.reduce((acc, item) => acc + item.price, 0)



const result = orders.reduce(sumFunc, 0)
console.log(result)