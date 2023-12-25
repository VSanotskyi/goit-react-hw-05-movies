import { Link, useLocation } from 'react-router-dom';

import defaultImage from '../defaultImage/IMG_1068.JPEG';

export default function FilmItem({ movie }) {
  const { title, poster_path, release_date } = movie;

  const img = `https://image.tmdb.org/t/p/w200/${poster_path}`;

  const location = useLocation();

  return (
    <li className="card">
      <Link to={`${movie.id}`}
            state={location}
      >
        <h2>{title}</h2>
        <p>{release_date}</p>
        <img src={poster_path ? img : defaultImage}
             alt={title}
        />
      </Link>
    </li>
  );
}
