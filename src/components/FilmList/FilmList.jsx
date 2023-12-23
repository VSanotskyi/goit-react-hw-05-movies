import { useEffect, useState } from 'react';

import { getTrendingMovies } from '../../services/moviesApi';
import FilmItem from '../FilmItem/FilmItem';

export default function FilmList() {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [btnDisable, setBtnDisable] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      const data = await getTrendingMovies(page);

      if (page === data.total_page) setBtnDisable(true);
      if (page === 1) setMovies(data.results);
      if (page !== 1) setMovies(prev => [...prev, ...data.results]);
    };

    getMovies();
  }, [page]);

  const handleClick = () => {
    setPage(prev => prev + 1);
    console.log(page);
  };

  return (
    <div>
      <ul>
        {
          movies?.map(el => (
            <FilmItem key={el.id}
                      movie={el}
            />
          ))
        }
      </ul>
      <button disabled={btnDisable}
              onClick={handleClick}
      >Load More
      </button>
    </div>
  );
}
