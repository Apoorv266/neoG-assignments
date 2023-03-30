// show the status like it is authenticated or not with a message in the DOM.


const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/login") {
          resolve({
            status: 200,
            data: {
              auth: true
            }
          });
        } else {
          reject({
            status: 404,
            message: "Status not found"
          });
        }
      }, 2000);
    });
  };
  
  // your code here
  const output = document.querySelector("#winnerList")


  fakeFetch("https://example.com/login").then(item =>{
    if (item.status === 200) {
        if (item.data.auth) {
            output.innerHTML = "<h1>verified</h1>"
        }
        else{
            output.innerHTML = "<h1>Not verified</h1>"
        }
    }
  }) 
  
  // Output on the DOM should be:
  // Verified