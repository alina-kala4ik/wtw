import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/app.jsx";
import films from "./mocks/films";

const settings = {
  promotionTitle: `djndjfnkjn`,
  promotionGenre: `alina`,
  promotionReleaseDate: `2021`,
};

const onFilmTitleClick = () => {};

const init = () => {
  ReactDOM.render(
      <App
        promotionTitle={settings.promotionTitle}
        promotionGenre={settings.promotionGenre}
        promotionReleaseDate={settings.promotionReleaseDate}
        films={films}
        onFilmTitleClick={onFilmTitleClick}
      />,
      document.querySelector(`#root`)
  );
};

init();
