import { useEffect, useState } from 'react';

export const useFetchPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(playerData => {
        // console.log('Fetch', players);
        setLoading(false);
        if (playerData) {
          setPlayers(playerData);
        } else {
          setPlayers([]);
        }
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [error]);
  return { players, loading, error };
};
