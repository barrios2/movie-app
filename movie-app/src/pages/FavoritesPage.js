import { KEY, LANGUAGE, SEARCH_MOVIE_BY_ID_URL } from '../utils/constants';
import { useEffect } from 'react';
import { useInteraction } from '../context/MovieContext'
import NavBar from '../components/NavBar';
import Movie from '../components/Movie';

export default function FavoritesPage() {
  const { results, favorites, isLoading, setIsLoading, setResults, errorMessage, setErrorMessage } = useInteraction();

  useEffect(() => {
    // in order to check favorite movie details and render in FavoritesPage I need to do it on a condition (and update every time there is a new favorite, but cannot do it with custom hook, therefore I am making this separately as a new function here)
    const fetchData = async (id) => {
      setIsLoading(true);
      try {
        const response = await fetch(`${SEARCH_MOVIE_BY_ID_URL}${id}?${LANGUAGE}&api_key=${KEY}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        return result; // Return the fetched movie
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    const fetchAllResults = async () => {
      setIsLoading(true);
      setErrorMessage(null); // Reset error message
      let allResults = []; // will store all fetched movies
      for (const id of favorites) {
        const result = await fetchData(id);
        allResults.push(result); // Add fetched movie to the temporary array
      }
      setResults(allResults); // Update results with all fetched movies
      setIsLoading(false);
    };

    fetchAllResults();
  }, [favorites])

  return (
    <>
      <NavBar />
      {errorMessage && <p>Error: {errorMessage}</p>} {/* Render error message */}
      {favorites.length === 0 ? (
        <p className='no-fav-yet-msg'>You haven't chosen any favorites yet!</p>
        ) : (
        <ul className='movie-card-list'>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            results?.map(movie => <Movie key={movie.id} movie={movie} />)
          )}
        </ul>
      )}
    </>
  );
}
