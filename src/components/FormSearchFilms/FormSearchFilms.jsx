import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function FormSearchFilms({ setAllMovies }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('search') ? searchParams.get('search') : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchParams.get('search') !== searchQuery) setAllMovies(null);

    setSearchParams({ search: searchQuery });
  };

  const handleChange = ({ target: { value } }) => {
    setSearchQuery(value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="searchImput">Enter search</label>
      <input type="text"
             name="search"
             id="searchImput"
             value={searchQuery}
             onChange={handleChange}
      />
      <button>Search</button>
    </form>
  );
}
