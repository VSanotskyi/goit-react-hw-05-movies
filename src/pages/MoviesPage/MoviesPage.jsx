import { useCallback, useEffect, useState } from 'react';
import { fetchSearchMovies } from '../../services/moviesApi';
import FilmList from '../../components/FilmList/FilmList';
import { useSearchParams } from 'react-router-dom';
import FormSearchFilms from '../../components/FormSearchFilms/FormSearchFilms';

export default function MoviesPage() {
  const [allMovies, setAllMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [isShowBtn, setIsShowBtn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [searchParams] = useSearchParams();

  const getMovies = useCallback(async (search) => {
    try {
      const { results, total_pages, total_results } = await fetchSearchMovies(
        page, search);

      setAllMovies(prev => prev ? [...prev, ...results] : results);

      if (total_pages > page) setIsShowBtn(true);
      if (total_results === results.length) setIsShowBtn(false);

    } catch (e) {
      setErrorMessage(e.response.status);
      console.log(e);
    }
  }, [page]);

  useEffect(() => {
    const search = searchParams.get('search');

    search && getMovies(search);
  }, [getMovies, searchParams]);

  const handleLoadMode = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      {
        errorMessage ? <h1>{errorMessage}</h1> :
          <>
            <h1>Movies</h1>
            <FormSearchFilms setAllMovies={setAllMovies} />
            {allMovies &&
              <>
                <FilmList
                  movies={allMovies}
                  handleLoadMode={handleLoadMode}
                  isShowBtn={isShowBtn}
                />
              </>
            }
          </>
      }
    </>
  );
}
