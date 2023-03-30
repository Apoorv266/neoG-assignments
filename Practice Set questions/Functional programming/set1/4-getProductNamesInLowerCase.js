// Your ES6 function here
const getProductNamesInLowerCase = (array) =>{
let newArr = array.map(item => item.name.toLowerCase())
return newArr
}


const products = [
    { name: 'Lip Balm', stock: 100 },
    { name: 'PERFUME', stock: 400 },
    { name: 'Socks', stock: 200 }
  ];
  console.log(getProductNamesInLowerCase(products));
  // Output: ["lip balm", "perfume", "socks"]