// 1.Write a function that uses reduce to calculate the total amount of money earned by the restaurant from all the orders. Assume that each item costs $10.

const orders = [
    { tableNumber: 1, items: ['burger', 'fries', 'soda'] },
    { tableNumber: 2, items: ['pizza', 'salad', 'water'] },
    { tableNumber: 3, items: ['sandwich', 'soup', 'coffee'] },
  ];

const orderFunc = (acc, arr) =>acc + arr.items.reduce((acc) => acc+=10, 0)


  const result = orders.reduce(orderFunc, 0)
  console.log(result)
  // Output 90