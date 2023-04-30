
import './App.css';
import BookContextFunc from './Books App/BookContext';
import BookHome from './Books App/BookHome';
// import LandingPage from './Email App/LandingPage';

function App() {
  return (
    <div className="App">
    {/* <LandingPage/> */}
    <BookContextFunc>
    <BookHome/>
    </BookContextFunc>
    </div>
  );
}

export default App;
