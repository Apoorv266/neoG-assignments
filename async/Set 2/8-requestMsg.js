const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/allbooks") {
          reject({
            status: 400,
            message: "Bad Request"
          });
        } else {
          resolve({
            status: 200,
            data: {
              message: "Success"
            }
          });
        }
      }, 2000);
    });
  };
  
  // Your Code here
  const output = document.querySelector("#output2")

  fakeFetch("https://example.com/api/allbooks").then(item =>{
    output.textContent =  item.data.message
  }).catch(error =>{
    if (error.status === 400) {
        output.textContent = "Bad Request! Requested size too large"
    }
  })
  
  // Output on the DOM should be: 
  // Bad Request! Requested size too large.