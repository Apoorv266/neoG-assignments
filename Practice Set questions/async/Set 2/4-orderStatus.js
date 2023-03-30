// show the order status using the user name on the DOM. 


const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/order/status/OR00A12") {
          resolve({
            status: 200,
            data: {
              order: {
                orderId: "OR00A12",
                status: "delivery pending",
                userName: "Kajal Kumari"
              }
            }
          });
        } else {
          reject({
            status: 404,
            message: "No order found"
          });
        }
      }, 2000);
    });
  };
  
  // your code here
  let output = document.querySelector("#output2")

  fakeFetch("https://example.com/order/status/OR00A12").then(res =>{
    if (res.status === 200) {
        output.textContent = `Hello ${res.data.order.userName} your order status is ${res.data.order.status}.`
    }
  })
  // Output on the DOM should be:
  // Hello Kajal Kumari your order status is delivery pending.