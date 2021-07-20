import React from "react";
import Main from "./../Main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {promotionTitle, promotionGenre, promotionReleaseDate, films, onFilmTitleClick} = props;

  return <Main
    promotionTitle={promotionTitle}
    promotionGenre={promotionGenre}
    promotionReleaseDate={promotionReleaseDate}
    films={films}
    onFilmTitleClick={onFilmTitleClick}
  />;
};

App.propTypes = {
  promotionTitle: PropTypes.string.isRequired,
  promotionGenre: PropTypes.string.isRequired,
  promotionReleaseDate: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  onFilmTitleClick: PropTypes.func.isRequired
};

export default App;
