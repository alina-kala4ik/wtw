import React from "react";
import FilmCard from "./../film-card/film-card";
import PropTypes from "prop-types";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, handelFilmTitleClick} = this.props;

    return <div className="catalog__movies-list">
      {films.map((film) => {
        return <FilmCard
          key={film.id}
          film={film}
          handlerFilmTitleClick={handelFilmTitleClick}
        />;
      })}
    </div>;
  }
}

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
  handelFilmTitleClick: PropTypes.func.isRequired
};

export default FilmsList;
