const KEY = '633ced7e464dd1d10eaad702adeed046';
const SEARCH_MOVIES_TITLE_URL = 'https://api.themoviedb.org/3/search/movie?query=';
const SEARCH_MOVIE_BY_ID_URL = 'https://api.themoviedb.org/3/movie/';
const POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
const MOVIE_DETAILS = 'https://api.themoviedb.org/3/movie';
const LANGUAGE = 'language=en-US';
const MOVIES_BY_GENRES_URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=';

export { 
  KEY, 
  SEARCH_MOVIES_TITLE_URL, 
  SEARCH_MOVIE_BY_ID_URL, 
  POPULAR_MOVIES_URL, 
  IMAGE_URL, GENRES_URL, 
  MOVIE_DETAILS, LANGUAGE, 
  MOVIES_BY_GENRES_URL 
}
