import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (uri) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!uri) return;
    (
      async () => {
        await axios.get(uri)
              .then(response => setData(response.data))
              .then(() => setLoading(false))
              .catch(error => setError(error))
      }
    )();
  }, [uri]);

  return {data, loading, error};
}