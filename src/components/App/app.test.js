
import React from "react";
import render from "react-test-renderer";
import App from "./app.jsx";

const settings = {
  promotionTitle: `alina`,
  promotionGenre: `alina`,
  promotionReleaseDate: `2021`,
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`render App`, () => {
  const three = render
    .create(
        <App
          promotionTitle={settings.promotionTitle}
          promotionGenre={settings.promotionGenre}
          promotionReleaseDate={settings.promotionReleaseDate}
          films={films}
        />)
    .toJSON();

  expect(three).toMatchSnapshot();
});
