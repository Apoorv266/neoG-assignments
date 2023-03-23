const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/profile/NC002") {
          resolve({
            status: 200,
            data: {
              message: "Success",
              data: { id: "NC002", name: "Roshan", institute: "neoG Camp" }
            }
          });
        } else {
          reject({
            status: 404,
            message: "Resource not found"
          });
        }
      }, 2000);
    });
  };
  
  // Your Code here
  const output = document.querySelector("#Output")

  fakeFetch("https://example.com/api/profile/NC002").then(value =>{
    output.textContent = `Welcome! , ${value.data.data.name} from ${value.data.data.institute}`
  }).catch(error =>{
    if (error.status === 404) {
        output.textContent = error.message
    }
  })
  
  
  
  
  // Output on the DOM should be: Welcome!, Roshan from neoG Camp
  