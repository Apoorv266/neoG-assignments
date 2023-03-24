// Show a proper message to the user on the DOM (Oops! Unexpected Error. Please try again.), as per the status received from the server. The error should be displayed in red colour. 

const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/users") {
          reject({
            status: 500,
          message: "Internal Server Error"
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
  let output = document.querySelector("#output2")

  fakeFetch("https://example.com/api/users").catch(error =>{
if (error.status === 500) {
    output.style.color = "red"
    output.textContent = "Oops. Unexpected Error. Please try again."
}
  })
  
  // Output on the DOM should be (in red color): 
  // Oops. Unexpected Error. Please try again.