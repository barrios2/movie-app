import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { KEY, LANGUAGE, SEARCH_MOVIES_TITLE_URL } from '../utils/constants';
import { useInteraction } from '../context/MovieContext';

export default function SearchBar() {
  const [movieTitle, setMovieTitle] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { setResults, setErrorMessage } = useInteraction();
  const { data } = useFetch(`${SEARCH_MOVIES_TITLE_URL}${searchQuery}&include_adult=false&${LANGUAGE}&page=1&api_key=${KEY}`);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(movieTitle); // Trigger search only until form is submitted
  };

  const handleChange = (e) => {
    setMovieTitle(e.target.value);
  };

  useEffect(() => {
    if (searchQuery.length >= 2 && data) { // Fetch data when searchQuery is not empty
      setSearchQuery(movieTitle);
    }
    setResults(data?.results);

    if (data?.results?.length < 1) {
      setErrorMessage('No results found')
    }
  }, [data, searchQuery, movieTitle]);

  useEffect(() => {
    setResults(data?.results);
    
    if (data?.results?.length < 1) {
      setErrorMessage('No results found');
    }
  }, [data]); // only render results based on whether we already have data from the API call

  return (
    <form onSubmit={handleSearch}>
      <input
        className='search-input'
        type='search' 
        placeholder='Enter movie title'
        value={movieTitle}
        onChange={handleChange}
      />
      <input 
        className='submit-input' 
        type='submit' 
        value='Submit' 
      />
    </form>
  );
}
