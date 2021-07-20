import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/app.jsx";

const settings = {
  promotionTitle: `alina`,
  promotionGenre: `alina`,
  promotionReleaseDate: `2021`,
}

const init = () => {
  ReactDOM.render(
    <App
      promotionTitle={settings.promotionTitle}
      promotionGenre={settings.promotionGenre}
      promotionReleaseDate={settings.promotionReleaseDate}
    />,
    document.querySelector('#root')
  )
}

init();