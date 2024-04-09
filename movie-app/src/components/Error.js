import { useInteraction } from '../context/MovieContext';

export default function ErrorMessage() {
  const { errorMessage } = useInteraction();
  return (
    <div className='errorPanel'>
      <p>{errorMessage}</p>
    </div>
  )
}
