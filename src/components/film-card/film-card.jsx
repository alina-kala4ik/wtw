import React from "react";
import PropTypes from "prop-types";

const FilmCard = (props) => {
  const {film, handlerFilmCardHover, handelFilmTitleClick} = props;
  const {name} = film;

  return (
    <article
      onMouseEnter={() => handlerFilmCardHover(film.id)}
      className="small-movie-card catalog__movies-card"
    >
      <div className="small-movie-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={(evt) => {
            evt.preventDefault();
            handelFilmTitleClick(film);
          }}
        >
          {name}
        </a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  handlerFilmCardHover: PropTypes.func.isRequired,
  handelFilmTitleClick: PropTypes.func.isRequired
};

export default FilmCard;
