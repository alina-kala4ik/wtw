import React from "react";
import FilmCard from "./../film-card/film-card";
import PropTypes from "prop-types";

const filteringFilmsByGenre = (films, genre, count) => {
  let filteredFilms = null;
  if (genre === `All genres`) {
    filteredFilms = films;
  } else {
    filteredFilms = films.filter((film) => film.genre === genre);
  }

  if (count) {
    return filteredFilms.slice(0, count);
  }
  return filteredFilms;
};

const FilmsList = (props) => {
  const {films, handlerFilmTitleClick, genre = `All genres`, count = null} = props;
  const filteredFilms = filteringFilmsByGenre(films, genre, count);

  return (
    <div className="catalog__movies-list">
      {filteredFilms.map((film) => {
        return <FilmCard
          key={film.id}
          film={film}
          handlerFilmTitleClick={handlerFilmTitleClick}
        />;
      })}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
  handlerFilmTitleClick: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
  count: PropTypes.number
};

export default FilmsList;
