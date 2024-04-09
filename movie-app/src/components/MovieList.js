import { LANGUAGE, POPULAR_MOVIES_URL, MOVIES_BY_GENRES_URL } from '../utils/constants';
import { useInteraction } from '../context/MovieContext';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import Movie from './Movie';
import ErrorMessage from './Error';

export default function MovieList() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [basedOnGenre, setBasedOnGenre] = useState([]);
  const { matchedGenre, errorMessage } = useInteraction();
  const { data, isLoading } = useFetch(`${POPULAR_MOVIES_URL}?${LANGUAGE}&page=${pageNumber}`);
  const { data: dataFromGenre, isLoading: loading } = useFetch(`${MOVIES_BY_GENRES_URL}${matchedGenre}`)

  const { handleDecrease, handleIncrement } = {
    handleDecrease: () => {
      setPageNumber((prevState) => prevState - 1);
    },
    handleIncrement: () => {
      setPageNumber((prevState) => prevState + 1);
    },
  };  

  const showPopularMovies = popularMovies?.map(movie => (
    <Movie movie={movie} key={movie.id}/>
  ));

  const showGenreBased = basedOnGenre?.map(movie => (
     <Movie movie={movie} key={movie.id}/>
  ));

  useEffect(() => {
    setPopularMovies(data?.results); // immediately set it to data of popular movies to show on first render of the page
    setBasedOnGenre(dataFromGenre?.results); // set to empty array if there is no matchedGenre at this point
  }, [data, matchedGenre, dataFromGenre, errorMessage])

  return (
    <div>
      {isLoading || loading ? (
        <p>Loading...</p>
        ) : errorMessage ? <ErrorMessage/> : (
        <ul className='movie-card-list'>
          {basedOnGenre?.length === 0 ? showPopularMovies : showGenreBased }
        </ul>
      )}
      <div className='pagination-container'>
        <button className='prev-next-btn' onClick={handleDecrease}>Previous</button>
        <button className='prev-next-btn' onClick={handleIncrement}>Next</button>
      </div>
    </div>
  );
}
