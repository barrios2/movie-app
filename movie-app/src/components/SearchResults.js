import { useInteraction } from '../context/MovieContext';
import ErrorMessage from './Error';
import Movie from './Movie';

export default function SearchResults() {
  const { results, errorMessage } = useInteraction();

  return (
    <ul className='movie-card-list'>
     {results && results?.map(movie => {
        return <Movie movie={movie} key={movie.id}/>
     })}
    {errorMessage && <ErrorMessage/>}
    </ul>
  );
}
