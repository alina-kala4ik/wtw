import React from "react";
import render from "react-test-renderer";
import FilmCard from "./film-card";

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

it(`FilmCard render`, () => {
  const three = render
    .create(
        <FilmCard
          film={film}
          handlerFilmCardHover={() => {}}
        />
    )
    .toJSON();

  expect(three).toMatchSnapshot();
});
