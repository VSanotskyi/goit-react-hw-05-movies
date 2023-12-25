import { useCallback, useEffect, useState } from 'react';

import FilmList from '../../components/FilmList/FilmList';
import { fetchTrendingMovies } from '../../services/moviesApi';

export default function HomePage() {
  const [allMovies, setAllMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [isShowBtn, setIsShowBtn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getMovies = useCallback(async () => {
    try {
      const { results, total_pages, total_results } = await fetchTrendingMovies(
        page);

      setAllMovies(prev => prev ? [...prev, ...results] : results);

      if (total_pages > page) setIsShowBtn(true);
      if (total_results === results.length) setIsShowBtn(false);

    } catch (e) {
      setErrorMessage(e.response.status);
      console.log(e);
    }
  }, [page]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const handleLoadMode = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      {allMovies ?
        <>
          <h1>Trending movies</h1>
          <FilmList
            movies={allMovies}
            handleLoadMode={handleLoadMode}
            isShowBtn={isShowBtn}
          />
        </> :
        <h1>{errorMessage}</h1>
      }
    </>
  );
}
