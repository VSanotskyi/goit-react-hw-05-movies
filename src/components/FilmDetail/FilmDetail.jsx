import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetailsMovies } from '../../services/moviesApi';

export default function FilmDetail() {
  const [movie, setMovie] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const data = await getDetailsMovies(movieID);
      setMovie(data);
    };

    getMovie();
  }, [movieID]);
  return (
    movie &&
    <div>
      <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
           alt=""
      />
    </div>
  );
}
