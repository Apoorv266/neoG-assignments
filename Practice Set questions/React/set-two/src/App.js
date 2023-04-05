// import About7 from './Answers/About7';
// import Article6 from './Answers/Article6';
// import Gadgets4 from './Answers/Gadgets4';
// import MyGadgets8 from './Answers/MyGadgets8';
// import Phones5 from './Answers/Phones5';
// import './App.css';
// import Greetings1 from './Answers/Greetings1';
// import Products2 from './Answers/Products2';
// import UserProfile3 from './Answers/UserProfile3';

import ColorPicker9 from "./Answers/ColorPicker9";
import Todo10 from "./Answers/Todo10";

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
  //   const title = 'React is awesome'
  // const content = 'React is a JavaScript library for building user interfaces.'

  //7th
  // const heading = 'About Me'
  // const name = 'Apoorv' // you can put your name
  // const learning = 'I am learning React JS currently at neoG Camp.'

  //8th
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
  //     name: 'speakers',
  //     description: 'Bose L1 Pro32 Portable',
  //     price: 256000,
  //   },
  //   { id: 4, name: 'mobile', description: 'iPhone 13', price: 61000 },
  //   {
  //     id: 5,
  //     name: 'monitor',
  //     description: 'Lenovo 32-inch display Monitor',
  //     price: 10000,
  //   },
  //   { id: 6, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
  //   {
  //     id: 7,
  //     name: 'speakers',
  //     description: 'Creative Desktop Speakers',
  //     price: 5000,
  //   },
  //   {
  //     id: 8,
  //     name: 'headphones',
  //     description: 'Sony over-the-ear wired Headphones with mic',
  //     price: 1500,
  //   },
  //   { id: 9, name: 'mobile', description: 'iPhone 12', price: 90000 },
  // ]

  //9th 
  // const red = '#EE4B2B'
  // const blue = '#89CFF0'
  // const green = '#7FFFD4'

  //10th
  const todoItems = [
    {
      id: 1,
      title: 'Complete practice set',
      description: 'Practice set 1 of React',
      isCompleted: true,
    },
    {
      id: 2,
      title: 'Attend revision session',
      description: 'Revision session of React',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Watch recording',
      description: 'Live session recording of React',
      isCompleted: true,
    },
    {
      id: 4,
      title: 'Attend DSH',
      description: 'Doubt Solving Hours of React',
      isCompleted: false,
    },
    {
      id: 5,
      title: 'Complete practice set',
      description: 'Practice set 2 of React',
      isCompleted: false,
    },
  ]

  return (
    <div className="App">
      {/* <Products2 product={product} price={price}/> */}
      {/* <Greetings1 name={name}/> */}
      {/* <UserProfile3 userData={userData}/> */}
      {/* <Gadgets4 products={products}/> */}
      {/* <Phones5 products={products}/> */}
      {/* <Article6 title={title} content={content}/> */}
      {/* <About7 heading={heading} name={name} learning={learning}/> */}
      {/* <MyGadgets8 products={products}/> */}
      {/* <ColorPicker9 redCol={red} blueCol={blue} greenCol={green}/> */}
      <Todo10 todoItems={todoItems}/>
    </div>
  );
}

export default App;
