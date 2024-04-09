import NavBar from '../components/NavBar';
import MovieList from '../components/MovieList';
import SearchResults from '../components/SearchResults';
import Footer from '../components/Footer';
import { useInteraction } from '../context/MovieContext';

export default function Homepage({ setActiveMovieInfo }) {
  const { results } = useInteraction();
  return (
    <>
      <NavBar title={'FreSkytime'} showSearchBar={true}/>
      {results?.length === 0 ? <MovieList/> : <SearchResults/>}
      <Footer/>
    </>
  );
}
