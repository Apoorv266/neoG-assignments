// Make a fake fetch call that takes a message and a boolean value to get data and console the message received from the server.


const fakeFetch = (msg, shouldSucceed) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldSucceed) {
          resolve(`message from server: ${msg}`);
        }
        reject(`error from server: ${msg}`);
      }, 3000);
    });
  };
  
  // Your Code here
  fakeFetch("Success !", true).then(data => console.log(data))
  
  
  // Hi -- after 3 seconds