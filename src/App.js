import './App.css';
import Main from './components/Main';
import data from './components/api';
import Banner from './components/Banner';
import { Routes, Route } from 'react-router';
import Movies from './components/Movies';
import Series from './components/Series';
import NewAndPopular from './components/NewAndPopular';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signin from './components/Signin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />

        {/* Exclude Navbar from Login, Sign Up, and Landing Page */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signin />} />
        
        <Route
          path='/*'
          element={
            <>
              <Navbar />
              <Routes>
                <Route
                  path='/home'
                  element={
                    <>
                      <Banner />
                      <Main title="Netflix Original" apiRequest={data.netflix_original} original={true} />
                      <Main title="Trending Now" apiRequest={data.trending} />
                      <Main title="Top Rated" apiRequest={data.top_rated} />
                      <Main title="Action Movies" apiRequest={data.actionmovies} />
                      <Main title="Comedy Movies" apiRequest={data.comedymovie} />
                      <Main title="Horror Movies" apiRequest={data.horrormovie} />
                      <Main title="Romantic Movies" apiRequest={data.romantic} />
                      <Main title="Documentaries Movies" apiRequest={data.documentry} />
                    </>
                  }
                />
                <Route path='/movies' element={<Movies />} />
                <Route path='/series' element={<Series />} />
                <Route path='/newandpopular' element={<NewAndPopular />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
