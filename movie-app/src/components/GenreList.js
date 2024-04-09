import Genre from './Genre';
import useFetch from '../hooks/useFetch';
import { GENRES_URL } from '../utils/constants';
import { useEffect } from 'react';
import { useInteraction } from '../context/MovieContext';

export default function GenreList() {
  const { data, isLoading } = useFetch(GENRES_URL);
  const { genres, setGenres } = useInteraction();

  useEffect(() => {
    setGenres(data?.genres);
  }, [data]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
        ) : (
        <ul className='genre-list'>
          {genres?.map(genre => (
            <Genre key={genre.id} genre={genre} />
          ))}
        </ul>
      )}
    </div>
  );
}
