// print the total price of all the products. 



const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://example.com/api/productlist") {
                resolve({
                    status: 200,
                    message: "Success",
                    data: [
                        { itemName: "Shoes", price: 100, quantity: 2 },
                        { itemName: "Hat", price: 350, quantity: 1 },
                        { itemName: "Tshirt", price: 410, quantity: 5 }
                    ]
                });
            } else {
                reject({
                    status: 404,
                    message: "Items list not found."
                });
            }
        }, 2000);
    });
};

// Your Code here
let output = document.querySelector("#output2")


fakeFetch("https://example.com/api/productlist").then(res => {
    let sum = res.data.reduce((acc, arr) => {
        return acc + (arr.price * arr.quantity)
    }, 0)
    output.innerHTML = `<p>Total: INR ${sum}</p>`
})

// Output on the DOM should be:
// Total: INR 2600