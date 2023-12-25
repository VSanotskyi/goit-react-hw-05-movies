import FilmItem from '../FilmItem/FilmItem';

export default function FilmList({ movies, handleLoadMode, isShowBtn }) {
  return (
    <div>
      <ul className="cardList">
        {
          movies.map(el => (
            <FilmItem key={el.id}
                      movie={el}
            />
          ))
        }
      </ul>
      {isShowBtn && <button onClick={handleLoadMode}
      >Load More
      </button>}
    </div>
  );
}
