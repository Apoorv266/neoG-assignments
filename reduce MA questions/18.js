
// Given an array of objects representing customers with their names and orders, use the reduce function to find the customer with the highest total order amount using reduce

const customers = [
    { name: 'Alice', orders: [10, 15, 20] },
    { name: 'Bob', orders: [5, 8, 12] },
    { name: 'Charlie', orders: [25, 30] }
];

// Output: { name: 'Charlie', totalOrders: 55 }

const maxFunc = (acc, arr) => {
    let value = 0

    for (let i = 0; i < arr.orders.length; i++) {
        value += arr.orders[i]
    }

    if (acc.orders < value) {
        return { name: arr.name, orders: value }
    }
    else {
        return acc
    }
}


let result = customers.reduce(maxFunc, { name: "", orders: 0 })
console.log(result)