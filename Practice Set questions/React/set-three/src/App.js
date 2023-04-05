
import DispImg1 from './Answers/DispImg1';
import './App.css';

function App() {
  //1st
  let url="https://picsum.photos/200"
  let height = "500px"
  let width="500px"
  return (
    <div className="App">
   <DispImg1 url={url} height={height} width={width}/>
    </div>
  );
}

export default App;
