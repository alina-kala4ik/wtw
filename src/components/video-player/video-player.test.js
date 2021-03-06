import React from "react";
import render from "react-test-renderer";
import VideoPlayer from "./video-player";

const film = {
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
};

it(`render VideoPlayer in play`, () => {
  const three = render
    .create(
        <VideoPlayer
          previewVideoLink={film.previewVideoLink}
          previewImage={film.previewImage}
          isPlaying={true} />
    )
    .toJSON();

  expect(three).toMatchSnapshot();
});

it(`render VideoPlayer in pause`, () => {
  const three = render
    .create(
        <VideoPlayer
          previewVideoLink={film.previewVideoLink}
          previewImage={film.previewImage}
          isPlaying={false} />
    )
    .toJSON();

  expect(three).toMatchSnapshot();
});
