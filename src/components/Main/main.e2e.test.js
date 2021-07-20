import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const settings = {
  promotionTitle: `alina`,
  promotionGenre: `alina`,
  promotionReleaseDate: `2021`,
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`title click`, () => {
  const onFilmTitleClick = jest.fn();

  const main = shallow(
      <Main
        promotionTitle={settings.promotionTitle}
        promotionGenre={settings.promotionGenre}
        promotionReleaseDate={settings.promotionReleaseDate}
        films={films}
        onFilmTitleClick={onFilmTitleClick}
      />
  );

  const titles = main.find(`.small-movie-card__link`);

  titles.forEach((title) => {
    title.simulate(`click`);
  });

  expect(onFilmTitleClick).toHaveBeenCalledTimes(3);
});
