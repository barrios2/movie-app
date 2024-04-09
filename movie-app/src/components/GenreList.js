import Genre from './Genre';
import useFetch from '../hooks/useFetch';
import { GENRES_URL } from '../utils/constants';
import { useInteraction } from '../context/MovieContext';
import { useEffect } from 'react';

export default function GenreList() {
  const { genres, setGenres } = useInteraction();
  const { data, isLoading } = useFetch(GENRES_URL);

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
