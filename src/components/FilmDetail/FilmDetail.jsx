import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchDetailsMovies } from '../../services/moviesApi';

export default function FilmDetail() {
  const [movie, setMovie] = useState(null);
  const { movieID } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetchDetailsMovies(movieID);
      setMovie(data);
    };

    getMovie();
  }, [movieID]);

  const handleClick = () => {
    navigate(location.state ?? '/movies');
  };

  return (
    <>
      <button onClick={handleClick}>back</button>
      {movie &&
        <div>
          <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
               alt=""
          />
        </div>
      }
      <NavLink to="credits"
      >credits</NavLink>
      <NavLink to="cast"
               state={location}
      >cast</NavLink>
      <Outlet />
    </>
  );
}
