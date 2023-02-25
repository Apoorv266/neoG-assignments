const formatProduct = ({name, price, inStock}) => `${name} costs INR ${price} and ${inStock ? "is in stock":"is not in stock"}.`


const product = {
    name: 'Socks',
    price: 249,
    inStock: false,
  };
  
  const message = formatProduct(product);
  console.log(message);