import Article6 from './Answers/Article6';
import Gadgets4 from './Answers/Gadgets4';
import Phones5 from './Answers/Phones5';
// import './App.css';
// import Greetings1 from './Answers/Greetings1';
// import Products2 from './Answers/Products2';
// import UserProfile3 from './Answers/UserProfile3';

function App() {
  //1nd 
  // const name = "Apoorv"

  //2st
  // const product = "Washing machine"
  // const price = 25000

  //3rd
  // const userData = {
  //   name: 'John',
  //   age: 25,
  //   email: 'john@example.com',
  // }

  //4th 
  // const products = [
  //   {
  //     id: 1,
  //     name: 'keyboard',
  //     description: 'Logitech Mechanical Keyboard',
  //     price: 2000,
  //   },
  //   { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
  //   {
  //     id: 3,
  //     name: 'monitor',
  //     description: 'Lenovo 32-inch display Monitor',
  //     price: 10000,
  //   },
  //   { id: 4, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
  //   {
  //     id: 5,
  //     name: 'speakers',
  //     description: 'Creative Desktop Speakers',
  //     price: 5000,
  //   },
  //   {
  //     id: 6,
  //     name: 'headphones',
  //     description: 'Sony over-the-ear wired Headphones with mic',
  //     price: 1500,
  //   },
  //   { id: 7, name: 'mobile', description: 'iPhone 12', price: 90000 },
  // ]

  //5th
  // const products = [
  //   {
  //     id: 1,
  //     name: 'keyboard',
  //     description: 'Logitech Mechanical Keyboard',
  //     price: 2000,
  //   },
  //   { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
  //   { id: 3, name: 'mobile', description: 'iPhone 13', price: 61000 },
  //   {
  //     id: 4,
  //     name: 'monitor',
  //     description: 'Lenovo 32-inch display Monitor',
  //     price: 10000,
  //   },
  //   { id: 5, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
  //   {
  //     id: 6,
  //     name: 'speakers',
  //     description: 'Creative Desktop Speakers',
  //     price: 5000,
  //   },
  //   {
  //     id: 7,
  //     name: 'headphones',
  //     description: 'Sony over-the-ear wired Headphones with mic',
  //     price: 1500,
  //   },
  //   { id: 8, name: 'mobile', description: 'iPhone 12', price: 90000 },
  // ]

  //6th
  const title = 'React is awesome'
const content = 'React is a JavaScript library for building user interfaces.'

  return (
    <div className="App">
      {/* <Products2 product={product} price={price}/> */}
      {/* <Greetings1 name={name}/> */}
      {/* <UserProfile3 userData={userData}/> */}
      {/* <Gadgets4 products={products}/> */}
      {/* <Phones5 products={products}/> */}
      <Article6 title={title} content={content}/>
    </div>
  );
}

export default App;
