import { Link } from 'react-router-dom';
import { IMAGE_URL } from "../utils/constants";
import { useEffect, useState } from 'react';
import { useInteraction } from '../context/MovieContext';
import heartReg from '../assets/heart-regular.svg';
import heartSol from '../assets/heart-solid.svg';

export default function Movie({ movie }) {
  const [imageSrc, setImageSrc] = useState('')
  const { setActiveMovieInfo, favorites, toggleFavorite } = useInteraction();
  const isFavorite = favorites?.includes(movie.id);

  const handleClick = () => {
    setActiveMovieInfo(movie);
  }
  
  const handleFavorite = (e) => {
    e.preventDefault();
    toggleFavorite(movie.id);
  };

  useEffect(() => {
    if (movie) {
      let image = '';
      if (movie.poster_path) {
        image = `${IMAGE_URL}${movie.poster_path}`;
      } else if (movie.backdrop_path) {
        image = `${IMAGE_URL}${movie.backdrop_path}`;
      } else {
        image = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
      }
      setImageSrc(image);
    }
  }, [movie]);

  return (
    <li className='movie-card'>
      {/* takes user to the product detail page when clicking on entire component (except favorite button - that's why i added preventDefault) */}
      <Link to={`/movie/${movie?.id}`} onClick={handleClick}> 
        <img src={imageSrc} alt={movie?.title} className='movie-image'/>
        <div className='favorite-btn-container'>
          <img src={isFavorite ? heartSol : heartReg} alt={isFavorite ? 'favorited' : 'not favorited'} className='heart' onClick={handleFavorite}/>
        </div>
        <p className='movie-title'>{movie?.title}</p>
      </Link>
    </li>
  );
}
