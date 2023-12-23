import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import FilmDetail from './FilmDetail/FilmDetail';

export default function App() {
  return (
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
        />

      </Route>
      <Route path="*"
             element={<Layout />}
      />
    </Routes>
  );
}
