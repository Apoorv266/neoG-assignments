// show an image on the DOM using the photo link received in the response.


const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/photo") {
          resolve({
            status: 200,
            data: {
              photo: {
                link: "https://source.unsplash.com/featured/300x201",
                title: "Random Image"
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
  let output = document.querySelector("#output3")
  
  fakeFetch("https://example.com/photo").then(({data : {photo : {link, title}}}) =>{
    let img = document.createElement("img")
    img.src = link
    img.alt = title

    output.appendChild(img)
  })
  
  // Output: an image on the DOM