// write a function which removes all letters between first and last letter of a word and replace with number of letters


const input = "Every a developer likes to mix kubernetes and javascript";
const input2 = input.split(" ") 
console.log(input2)

let result = input2.map((item) =>{
  if (item.length <= 2) {
    return item
  }
  let cutVal =  item.substring(1, item.length - 1)
  let result = item.replace(cutVal, cutVal.length);
    return result
})
console.log(result.join(" "))
//expected output
"E3y d7r l3s to m1x k8s a1d j8t"