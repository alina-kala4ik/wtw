import React from "react";
import render from "react-test-renderer";
import Main from "./main";

const settings = {
  promotionTitle: `alina`,
  promotionGenre: `alina`,
  promotionReleaseDate: `2021`,
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`render Main`, () => {
  const three = render
    .create(
        <Main
          promotionTitle={settings.promotionTitle}
          promotionGenre={settings.promotionGenre}
          promotionReleaseDate={settings.promotionReleaseDate}
          films={films}
        />
    )
    .toJSON();

  expect(three).toMatchSnapshot();
});
