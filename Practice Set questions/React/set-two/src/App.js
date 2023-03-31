import Name1 from './Answers/Name1';
import './App.css';

function App() {
  //1st
  const product = "Washing machine"
  const price = 25000
  return (
    <div className="App">
    <Name1 product={product} price={price}/>
    </div>
  );
}

export default App;
