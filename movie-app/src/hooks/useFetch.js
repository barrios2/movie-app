import { useState, useEffect } from 'react';
import { KEY } from '../utils/constants';
import { useInteraction } from '../context/MovieContext';

export default function useFetch(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]); // Initialize data to null
  const { setErrorMessage } = useInteraction();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${url}&api_key=${KEY}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result);
      setErrorMessage(null); // Reset error on successful fetch
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { isLoading, data };
}
