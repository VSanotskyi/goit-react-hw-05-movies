import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/moviesApi';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const { results } = await fetchMovieCast(movieID);
      setCast(results);
    };

    getCast();
  }, [movieID]);

  return (
    cast?.length > 0 && (
      <ul>
        {cast.map(el => (
          <li key={el.id}>
            <p>{el.author}</p>
            <p>{el.content}</p>
          </li>
        ))}
      </ul>
    )

  );
}
