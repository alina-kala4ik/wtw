import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import App from "./components/App/app.jsx";
import {reducer} from "./reducer";
import thunk from "redux-thunk";

import {Operation} from "./reducer";

const settings = {
  promotionTitle: `djndjfnkjn`,
  promotionGenre: `alina`,
  promotionReleaseDate: `2021`,
};

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
));

store.dispatch(Operation.loadFilms());

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          promotionTitle={settings.promotionTitle}
          promotionGenre={settings.promotionGenre}
          promotionReleaseDate={settings.promotionReleaseDate}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
