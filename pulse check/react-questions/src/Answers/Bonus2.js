import React from 'react';

const hotelBill = [
  {
    id: 1,
    foodItems: ['Chole Bhature', 'Aloo Puri', 'Pani Puri'],
    totalQuantity: 5,
    price: 300,
  },
  {
    id: 2,
    foodItems: ['Idli Sambhar', 'Rasgulla'],
    totalQuantity: 8,
    price: 600,
  },
  {
    id: 3,
    foodItems: ['Chole Bhature', 'Aloo Puri', 'Pani Puri'],
    totalQuantity: 5,
    price: 700,
  },
];

const Bonus2 = () => {
  const prices = hotelBill.reduce( (acc,item) => {
    if (item.foodItems.includes('Chole Bhature')) {
      return acc+=item.price
    }
    return acc;
  }, 0);

  if (!prices) {
    return <h1 key="no-item">No item in array</h1>
  }

  return <ol>Items that contains Chole Bhature has price : Rs.{prices}</ol>;
};

export default Bonus2;



// Find total price of dishes containing chole bhature


// const Bonus3 = () => {
//     const ordersWithCholeBhature = hotelBill.filter((order) => order.foodItems.includes('Chole Bhature'))
//     if (ordersWithCholeBhature.length === 0) {
//         return <h1>No item with chole bhature found in the order list</h1>
//     }
//     const totalPrice = ordersWithCholeBhature.reduce((acc, order) => acc + order.price, 0)
//     return (
//         <div>
//             <p>Total Price of the order with chole bhature: Rs. {totalPrice}</p>
//         </div>
//     )
// }

// export default Bonus3