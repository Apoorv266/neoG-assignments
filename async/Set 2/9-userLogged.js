// display a welcome message to the user on the DOM. Welcome message (if provided) should be used else the default message of Welcome to the servershould be shown. Message should be only shown if the user is logged in.


const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!url === "https://example.com/welcome") {
          reject({
            status: 511,
            message: "Network auth required"
          });
        } else {
          resolve({
            status: 200,
            data: {
              logged: true
            }
          });
        }
      }, 2000);
    });
  };
  
  // your code here
  const output = document.querySelector("#output2")

 fakeFetch().then(({status, data : {logged}}) =>{
if (status === 200) {
    if (logged) {
        output.textContent = "Welcome to Server !"
    }
    else{
        output.textContent = "Not logged in !"
    }
}
 })
  
  // Output: As per the response from server