import './App.css';
import EcomHome from './Answers/Ecom App/EcomHome';
import HomeTodo from './Answers/Todos app/HomeTodo';
import ForumHome from './Answers/Forum App/ForumHome';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      {/* <EcomHome/> */}
      {/* <HomeTodo/> */}
      <BrowserRouter>
      <ForumHome/>
      </BrowserRouter>
      </div>
  );
}

export default App;
