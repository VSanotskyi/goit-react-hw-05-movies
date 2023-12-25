import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Credits from './Credits/Credits';
import Cast from './Cast/Cast';

const Layout = lazy(() => import('../layout/Layout'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const FilmDetail = lazy(() => import('./FilmDetail/FilmDetail'));

export default function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/"
               element={<Layout />}
        >
          <Route index
                 element={<HomePage />}
          />
          <Route path="movies"
                 element={<MoviesPage />}
          />
          <Route path="/:movieID"
                 element={<FilmDetail />}
          >
            <Route path="credits"
                   element={<Credits />}
            />
            <Route path="cast"
                   element={<Cast />}
            />
          </Route>
          <Route path="movies/:movieID"
                 element={<FilmDetail />}
          >
            <Route path="credits"
                   element={<Credits />}
            />
            <Route path="cast"
                   element={<Cast />}
            />
          </Route>
          <Route path="*"
                 element={<HomePage />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}
