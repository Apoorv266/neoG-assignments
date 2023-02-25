
// Your ES6 code here

const userData = {
  name: 'Jane Doy',
  postalCode: '12134',
  city: 'Germany',
}

const getAddress = ({city, postalCode}) => ({postalCode : postalCode, city: city})

console.log(getAddress(userData));
// {postalCode: '12134', city: 'Germany'}
