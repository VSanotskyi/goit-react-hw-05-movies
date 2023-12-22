import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
