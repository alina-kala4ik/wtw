import React from "react";
import PropTypes from "prop-types";

const createGenresList = (films) => {
  const list = new Set();
  list.add(`All genres`);
  films.forEach((film) => list.add(film.genre));
  return Array.from(list).slice(0, 9);
};

const GenresList = (props) => {
  const {films, selectedGenre, handlerGenreClick} = props;
  const genresList = createGenresList(films);

  return (
    <ul className="catalog__genres-list">

      {genresList.map((genre) => {
        return (
          <li
            key={genre}
            className={`catalog__genres-item ${selectedGenre === genre ? `catalog__genres-item--active` : ``}`}>
            <a
              onClick={() => handlerGenreClick(genre)}
              className="catalog__genres-link">
              {genre}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  films: PropTypes.array.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  handlerGenreClick: PropTypes.func.isRequired,
};

export default GenresList;
