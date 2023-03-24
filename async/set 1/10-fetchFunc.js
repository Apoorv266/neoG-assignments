// Use this URL - https://example.com/api/profile to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. 


const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/profile") {
          reject({
            status: 401,
            message: "Unauthorized Access"
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
  const output = document.querySelector("#Output")

  fakeFetch("https://example.com/api/profile").then(data => console.log(data)).catch(error =>{
    if (error.status === 401) {
        output.textContent = `Unauthorized Access! Looks like you are not logged in. Please login to see your profile data.`
    }
  }) 
  
  
  
  // Output on the DOM should be: 
  // Unauthorized Access! Looks like you are not logged in. Please login to see your profile data.