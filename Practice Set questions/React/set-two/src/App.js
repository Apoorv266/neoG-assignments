import './App.css';
import Greetings2 from './Answers/Greetings2';
// import Name1 from './Answers/Name1';

function App() {
  //1st
  // const product = "Washing machine"
  // const price = 25000

  //2nd 
  const name = "Apoorv"
  return (
    <div className="App">
    {/* <Name1 product={product} price={price}/> */}
    <Greetings2 name={name}/>
    </div>
  );
}

export default App;
