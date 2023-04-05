import UserProfile3 from './Answers/UserProfile3';
import './App.css';
// import Greetings1 from './Answers/Greetings1';
// import Products2 from './Answers/Products2';

function App() {
  //1nd 
  // const name = "Apoorv"

  //2st
  // const product = "Washing machine"
  // const price = 25000

  //3rd
  const userData = {
    name: 'John',
    age: 25,
    email: 'john@example.com',
  }

  return (
    <div className="App">
    {/* <Products2 product={product} price={price}/> */}
    {/* <Greetings1 name={name}/> */}
    <UserProfile3 userData={userData}/>
    </div>
  );
}

export default App;
