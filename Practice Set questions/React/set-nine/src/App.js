
import './App.css';
import BookContextFunc from './Books App/BookContext';
import BookHome from './Books App/BookHome';
import Home from './Pizza App/Home';
import VideoContextFunc from './VideoListing/VideoContext';
import VideoHome from './VideoListing/VideoHome';
// import LandingPage from './Email App/LandingPage';

function App() {
  return (
    <div className="App">
    {/* <LandingPage/> */}

    
    {/* <BookContextFunc>
    <BookHome/>
    </BookContextFunc> */}

    {/* <Home/> */}

    <VideoContextFunc>
      <VideoHome/>
    </VideoContextFunc>

    </div>
  );
}

export default App;
