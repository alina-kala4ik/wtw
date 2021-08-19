import React from "react";
import Main from "./../main/main";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import FilmPage from "./../film-page/film-page";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilm: null
    };
    this.handlerFilmTitleClick = this.handlerFilmTitleClick.bind(this);
  }

  handlerFilmTitleClick(film) {
    this.setState({
      selectedFilm: film
    });
  }

  _renderApp() {
    const {promotionTitle, promotionGenre, promotionReleaseDate, films, selectedGenre, handlerGenreClick, visibleCountOfFilms, handlerShowMoreClick} = this.props;
    const {selectedFilm} = this.state;

    if (selectedFilm === null) {
      return <Main
        promotionTitle={promotionTitle}
        promotionGenre={promotionGenre}
        promotionReleaseDate={promotionReleaseDate}
        films={films}
        handlerFilmTitleClick={this.handlerFilmTitleClick}
        selectedGenre={selectedGenre}
        handlerGenreClick={handlerGenreClick}
        visibleCountOfFilms={visibleCountOfFilms}
        handlerShowMoreClick={handlerShowMoreClick}
      />;
    }

    return <FilmPage
      film={selectedFilm}
      films={films}
      handlerFilmTitleClick={this.handlerFilmTitleClick}
    />;
  }

  render() {
    const {films} = this.props;


    if (films.length === 0) {
      return null;
    }

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderApp()}
        </Route>
        <Route exact path="/film-page">
          <FilmPage
            film={films[3]}
            films={films}
            handlerFilmTitleClick={this.handlerFilmTitleClick}
          />
        </Route>
      </Switch>
    </BrowserRouter>;
  }
}

App.propTypes = {
  promotionTitle: PropTypes.string.isRequired,
  promotionGenre: PropTypes.string.isRequired,
  promotionReleaseDate: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  handlerGenreClick: PropTypes.func.isRequired,
  visibleCountOfFilms: PropTypes.number.isRequired,
  handlerShowMoreClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  selectedGenre: state.genre,
  visibleCountOfFilms: state.visibleCountOfFilms,
  films: state.allFilms
});

const mapDispatchToProps = (dispatch) => ({
  handlerGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
  handlerShowMoreClick() {
    dispatch(ActionCreator.showMoreFilms());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
