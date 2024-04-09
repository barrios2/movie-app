import { createContext, useContext, useEffect, useState } from 'react';

const InteractionContext = createContext();

export const useInteraction = () => {
  return useContext(InteractionContext);
};

export const InteractionContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [results, setResults] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreSelected, setGenreSelected] = useState('');
  const [matchedGenre, setMatchedGenre] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [movieDetails, setMovieDetails] = useState('');
  const [activeMovieInfo, setActiveMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  const toggleFavorite = (movieId) => {
    if (favorites?.includes(movieId)) {
      setFavorites(favorites?.filter((id) => id !== movieId));
    } else {
      setFavorites([...favorites, movieId]);
    }
  };

  const clearResults = () => {
    setResults([])
  };

  useEffect(() => {
    const genre = genres?.filter(e => e.name === genreSelected); // based on list of all genres, it filters based on the name of genre that was selected -> save the genre object (id + name) to get the ID so that we use matchedGenre to make API call that fetches movies based on genre
    setMatchedGenre(genre ? genre[0]?.id : {}); // set it to empty object if there is no genre to check the id of
  }, [results, genreSelected, errorMessage])


  return (
    <InteractionContext.Provider value={{ 
      favorites, toggleFavorite, 
      results, setResults, 
      genreSelected, setGenreSelected, genres, setGenres, matchedGenre, 
      errorMessage, setErrorMessage, 
      movieDetails, setMovieDetails, 
      activeMovieInfo, setActiveMovieInfo, 
      clearResults, 
      isLoading, setIsLoading }} >
      {children}
    </InteractionContext.Provider>
  );
}
