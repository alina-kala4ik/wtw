import React from "react";
import FilmCard from "./../film-card/film-card";
import PropTypes from "prop-types";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilm: false
    };
    this.handlerFilmCardHover = this.handlerFilmCardHover.bind(this);
  }

  handlerFilmCardHover(filmId) {
    this.setState({activeFilm: filmId});
  }

  render() {
    const {films} = this.props;

    return <div className="catalog__movies-list">
      {films.map((film) => {
        return <FilmCard
          key={film.id}
          film={film}
          handlerFilmCardHover={this.handlerFilmCardHover}
        />;
      })}
    </div>;
  }
}

FilmsList.propTypes = {
  films: PropTypes.array.isRequired
};

export default FilmsList;