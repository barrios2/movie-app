import { IMAGE_URL, LANGUAGE, MOVIE_DETAILS } from '../utils/constants';
import { useEffect } from 'react';
import { useInteraction } from '../context/MovieContext';
import heartReg from '../assets/heart-regular.svg'
import heartSol from '../assets/heart-solid.svg'
import NavBar from '../components/NavBar';
import useFetch from '../hooks/useFetch';
import Footer from '../components/Footer';

export default function MovieDetailPage() {
  const { movieDetails, setMovieDetails, activeMovieInfo, favorites, toggleFavorite } = useInteraction();
  const { data } = useFetch(`${MOVIE_DETAILS}/${activeMovieInfo.id}?${LANGUAGE}`);
  const date = new Date(activeMovieInfo?.release_date);
  const realDate = date.toLocaleString('en-us', { day: 'numeric', month: 'long', year: 'numeric' })
  const isFavorite = favorites.includes(activeMovieInfo.id);
  
  const handleFavorite = () => {
    toggleFavorite(activeMovieInfo?.id);
  };

  useEffect(()=>{ 
    setMovieDetails(data);
  }, [data, movieDetails]);

  return (
    <>
      <NavBar showSearchBar={false}/>
      <div className='favorite-btn-container'>
        <img src={isFavorite ? heartSol : heartReg} alt={isFavorite ? 'favorited' : 'not favorited'} className='heart' onClick={handleFavorite}/>
      </div>
      <div className='movie-detail-page'>
        <div className='movie-detail-poster-container'>
          <img src={`${IMAGE_URL}${activeMovieInfo?.backdrop_path ? activeMovieInfo?.backdrop_path : activeMovieInfo?.poster_path}`} alt={activeMovieInfo?.title} className='movie-detail-image'/>
          <div>
            <h2 className='movie-details-title'>{activeMovieInfo?.title}</h2>
            <p className='movie-details'> {activeMovieInfo?.overview}</p>
            <p className='movie-details'> <span>Release date:</span> {realDate}</p>
            <p className='movie-details'> <span>Duration: </span> {movieDetails?.runtime}min</p>
            <button className='watch-movie-btn'>Watch movie</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
