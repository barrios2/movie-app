import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InteractionContextProvider } from './context/MovieContext';
import Homepage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <div className='App'>
      <InteractionContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/movie/:id' element={<MovieDetailPage/>} />
            <Route path='/favorites' element={<FavoritesPage/>}/>
          </Routes>
        </Router>
      </InteractionContextProvider>
    </div>
  );
}

export default App;
