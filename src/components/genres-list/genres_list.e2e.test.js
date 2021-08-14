import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenresList from "./genres_list";

Enzyme.configure({
  adapter: new Adapter()
});

const films = [
  {
    "id": 1,
    "name": `The Grand Budapest Hotel`,
    "posterImage": `img/the-grand-budapest-hotel-poster.jpg`,
    "previewImage": `img/dardjeeling-limited.jpg`,
    "backgroundImage": `img/the-grand-budapest-hotel-bg.jpg`,
    "backgroundColor": `#ffffff`,
    "videoLink": `https://some-link`,
    "previewVideoLink": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    "rating": 8.9,
    "scoresCount": 240,
    "director": `Wes Andreson`,
    "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    "runTime": 99,
    "genre": `Comedy`,
    "released": 2014,
    "isFavorite": false
  }
];

it(`call handlerGenreClick`, function () {
  const handlerGenreClick = jest.fn();

  const genresList = Enzyme.shallow(
      <GenresList
        films={films}
        selectedGenre={`All genres`}
        handlerGenreClick={handlerGenreClick}>
      </GenresList>
  );

  const genreLink = genresList.find(`.catalog__genres-link`).at(1);
  genreLink.simulate(`click`);

  expect(handlerGenreClick).toHaveBeenCalledTimes(1);
  expect(handlerGenreClick.mock.calls[0][0]).toEqual(`Comedy`);
});
