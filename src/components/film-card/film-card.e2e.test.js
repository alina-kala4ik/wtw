import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card";

Enzyme.configure({
  adapter: new Adapter()
});

const film = {
  "id": 4,
  "name": `keks`,
  "posterImage": `img/the-grand-budapest-hotel-poster.jpg`,
  "previewImage": `img/the-grand-budapest-hotel.jpg`,
  "backgroundImage": `img/the-grand-budapest-hotel-bg.jpg`,
  "backgroundColor": `#ffffff`,
  "videoLink": `https://some-link`,
  "previewVideoLink": `https://some-link`,
  "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  "rating": 8.9,
  "scoresCount": 240,
  "director": `Wes Andreson`,
  "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  "runTime": 99,
  "genre": `Comedy`,
  "released": 2014,
  "isFavorite": false
};

it(`film card title click`, () => {
  const handelFilmTitleClick = jest.fn();
  const preventDefault = jest.fn();

  const filmCard = Enzyme.shallow(
      <FilmCard
        film={film}
        handlerFilmCardHover={() => {}}
        handlerFilmTitleClick={handelFilmTitleClick}
      />
  );


  const filmTitle = filmCard.find(`.small-movie-card__link`);
  filmTitle.simulate(`click`, {preventDefault});

  expect(preventDefault).toHaveBeenCalledTimes(1);
  expect(handelFilmTitleClick).toHaveBeenCalledTimes(1);
  expect(handelFilmTitleClick.mock.calls[0][0]).toMatchObject(film);
});

it(`change state in film card component when mouse enter on film card`, () => {
  const expectedState = {
    isPlaying: true
  };

  const filmCard = Enzyme.shallow(
      <FilmCard
        film={film}
        handlerFilmTitleClick={() => {}}
      />
  );

  filmCard.setState({
    isPlaying: false
  });

  const filmCardBlock = filmCard.find(`.small-movie-card`);
  filmCardBlock.simulate(`mouseenter`);

  const filmCardState = filmCard.state();

  expect(filmCardState).toMatchObject(expectedState);
});

it(`change state in film card component when mouse leave on film card`, () => {
  const expectedState = {
    isPlaying: false
  };

  const filmCard = Enzyme.shallow(
      <FilmCard
        film={film}
        handlerFilmTitleClick={() => {}} />
  );

  filmCard.setState({
    isPlaying: true
  });

  const filmCardBlock = filmCard.find(`.small-movie-card`);
  filmCardBlock.simulate(`mouseleave`);

  const filmCardState = filmCard.state();

  expect(filmCardState).toMatchObject(expectedState);
});
