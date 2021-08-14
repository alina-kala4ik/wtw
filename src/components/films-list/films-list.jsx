import React from "react";
import FilmCard from "./../film-card/film-card";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFilteredFilmsByGenre} from "./../../reducer";

const FilmsList = (props) => {
  const {films, handlerFilmTitleClick} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => {
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

const mapStateToProps = (state, props) => {
  const {genre = `All genres`, count = null} = props;

  let films = state.allFilms;

  if (genre !== `All genres`) {
    films = getFilteredFilmsByGenre(genre);
  }

  const showedFilms = films.slice(0, count);

  return {
    films: showedFilms
  };
};

export {FilmsList};
export default connect(mapStateToProps)(FilmsList);
