import { Link } from 'react-router-dom';

export default function FilmItem({ movie }) {
  const { title, poster_path } = movie;

  return (
    <li>
      <Link to={`movies/${movie.id}`}>
        <h2>{title}</h2>
        <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
             alt=""
        />
      </Link>
    </li>
  );
}
