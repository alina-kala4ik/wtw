import React from "react";
import Main from "./../main/main";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import FilmPage from "./../film-page/film-page";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilm: null
    };
    this.handelFilmTitleClick = this.handelFilmTitleClick.bind(this);
  }

  handelFilmTitleClick(film) {
    this.setState({
      selectedFilm: film
    });
  }

  _renderApp() {
    const {promotionTitle, promotionGenre, promotionReleaseDate, films} = this.props;
    const {selectedFilm} = this.state;

    if (selectedFilm === null) {
      return <Main
        promotionTitle={promotionTitle}
        promotionGenre={promotionGenre}
        promotionReleaseDate={promotionReleaseDate}
        films={films}
        handelFilmTitleClick={this.handelFilmTitleClick}
      />;
    }

    return <FilmPage
      film={selectedFilm}
    />;
  }

  render() {
    const {films} = this.props;

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderApp()}
        </Route>
        <Route exact path="/film-page">
          <FilmPage
            film={films[3]}
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
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired
  })).isRequired,
};

export default App;
