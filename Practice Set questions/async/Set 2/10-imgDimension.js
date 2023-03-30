// takes a url and dimensions for the photo to be displayed. Dimensions should be passed in the format [width, height]. Show the image provided in the response on DOM. 

function fakeFetch(url, dimensions) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://example.com/getImage") {
                resolve({
                    status: 200,
                    data: {
                        image: {
                            link: `https://picsum.photos/${dimensions[0]}/${dimensions[1]}`,
                            title: "Random Image"
                        }
                    }
                })
            } else {
                reject({
                    status: 404,
                    message: "No photo of such dimension found"
                })
            }
        }, 2000)
    })
}
  
  // your code here
let output = document.querySelector("#output3")
  fakeFetch("https://example.com/getImage", [200, 300]).then(({data : {image : {link, title}}} )=>{
    let img = document.createElement("img")
    img.src = link
    img.alt = title
    output.appendChild(img)
  })
  
  
  // Output on the DOM should be an image.