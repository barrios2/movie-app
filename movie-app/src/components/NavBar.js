import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import logoImage from '../assets/freskytime.png';
import { useInteraction } from '../context/MovieContext';
import GenreList from './GenreList';

export default function NavBar({ showSearchBar }) {
  const { clearResults } = useInteraction();
  
  const handleClick = () => {
    clearResults(); // empties array of results to re render original (popular movies) movie card list
  }

  return (
    <>
      <div className='nav-bar-container'>
        <div className='nav-bar-without-genres'>
          <Link to={'/'}>
            <div className='logo-container'>
              <img className='logo' src={logoImage} alt='FreSkytime logo'/>
              <h1>FreSkyTime</h1>
            </div>
          </Link>
          <div className='navigation'>
            <div className='nav-main-btns'>
              <Link to={'/'}>
                <button className='nav-bar' onClick={handleClick}>Home</button>
              </Link>
              <Link to={'/favorites'}>
                <button className='nav-bar'>Favorites</button>
              </Link>
            </div>
            {showSearchBar ? <SearchBar/> : null}
          </div>
        </div>
        <GenreList/>
      </div>
    </>
  );
}
