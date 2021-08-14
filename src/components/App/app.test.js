
import React from "react";
import render from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {App} from "./app";

const settings = {
  promotionTitle: `alina`,
  promotionGenre: `alina`,
  promotionReleaseDate: `2021`,
};

const films = [
  {
    "id": 1,
    "name": `The Grand Budapest Hotel`,
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
  },
  {
    "id": 2,
    "name": `Fantastic Beasts: The Crimes of Grindelwald`,
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
  },
  {
    "id": 3,
    "name": `Bohemian Rhapsody`,
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
  },
  {
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
  },
];

const mockStore = configureStore([]);

it(`render App`, () => {
  const store = mockStore({
    genre: `All genres`,
    allFilms: films,
    visibleCountOfFilms: 8,
  });

  const three = render
    .create(
        <Provider store={store}>
          <App
            promotionTitle={settings.promotionTitle}
            promotionGenre={settings.promotionGenre}
            promotionReleaseDate={settings.promotionReleaseDate}
            films={films}
            selectedGenre={`All genres`}
            handlerGenreClick={() => {}}
            visibleCountOfFilms={8}
            handlerShowMoreClick={() => {}}
          />
        </Provider>
    )
    .toJSON();

  expect(three).toMatchSnapshot();
});
