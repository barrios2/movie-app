import { useInteraction } from '../context/MovieContext';

export default function Genre({ genre }) {
  const { setGenreSelected, clearResults } = useInteraction();

  const handleClick = (e) => {
    const val = e.target.textContent;
    setGenreSelected(val); // to be used for matching the Genre name to the genre ID so the movies based on that genre can be fetched
    clearResults(); // clears results so that genre button can be clicked and display the right info
  }
  
  return (
    <li className='genre-item'>
      <button onClick={handleClick}>{genre?.name}</button>
    </li>
  );
}
