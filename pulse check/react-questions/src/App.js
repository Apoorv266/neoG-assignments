
// import './App.css';
import Q1 from './Answers/Q1';
import Todo from './Answers/Todo';
import Bonus from './Answers/Bonus';
import Q4 from './Answers/Q4';
import Article from './Answers/Article';

function App() {
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

  const products = [
    {
      id: 1,
      name: 'keyboard',
      description: 'Logitech Mechanical Keyboard',
      price: 2000,
    },
    { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
    {
      id: 3,
      name: 'speakers',
      description: 'Bose L1 Pro32 Portable',
      price: 256000,
    },
    { id: 4, name: 'mobile', description: 'iPhone 13', price: 61000 },
    {
      id: 5,
      name: 'monitor',
      description: 'Lenovo 32-inch display Monitor',
      price: 10000,
    },
    { id: 6, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
    {
      id: 7,
      name: 'speakers',
      description: 'Creative Desktop Speakers',
      price: 5000,
    },
    {
      id: 8,
      name: 'headphones',
      description: 'Sony over-the-ear wired Headphones with mic',
      price: 1500,
    },
    { id: 9, name: 'mobile', description: 'iPhone 12', price: 90000 },
  ]

  const title = 'React is awesome'
const content = 'React is a JavaScript library for building user interfaces.'
  return (
    <div className="App">
      {/* <Q1/> */}
      {/* <Todo todoItems={todoItems}/> */}
      {/* <Bonus products={products}/> */}
      {/* <Q4/> */}
      <Article title={title} content={content}/>
    </div>
  );
}

export default App;
