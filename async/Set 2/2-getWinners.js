// get names of winner group members and show a nice message on the DOM congratulating all of them. 


const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/winner-team") {
          resolve({
            status: 200,
            data: {
              message: "Success",
              data: ["Jhon", "Raju", "Anjali", "Sakshi"]
            }
          });
        } else {
          reject({
            status: 404,
            message: "No Users found."
          });
        }
      }, 2000);
    });
  };
  
  // your code here
  let output = document.querySelector("#winnerList")


  fakeFetch("https://example.com/winner-team").then(item =>{
    let string = ""
    item.data.data.map((item, i, array) => {
        if (i == array.length - 2) {
            string+=item + " and "
        }else{
            string+=item + " "
        }
    })
    output.textContent =  `Congratulation to the members of winning team ${string} great work keep it up.`
  })

  
  // Output on the DOM should be:
  // Congratulation to the members of winning team Jhon, Raju, Anjali, Sakshi, great work keep it up.