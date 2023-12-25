import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCredits } from '../../services/moviesApi';

export default function Credits() {
  const [credits, setCredits] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    const getCredits = async () => {
      const { cast } = await fetchMovieCredits(movieID);
      setCredits(cast);
    };

    getCredits();
  }, [movieID]);


  return (
    credits &&
    <ul>
      {credits.map(el => (
        <li key={el.id}>{el.name}</li>
      ))}
    </ul>
  );
}
