import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/App/app.jsx";
import films from "./mocks/films";
import {reducer} from "./reducer";

const settings = {
  promotionTitle: `djndjfnkjn`,
  promotionGenre: `alina`,
  promotionReleaseDate: `2021`,
};

const store = createStore(reducer);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          promotionTitle={settings.promotionTitle}
          promotionGenre={settings.promotionGenre}
          promotionReleaseDate={settings.promotionReleaseDate}
          films={films}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
