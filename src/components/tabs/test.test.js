import React from "react";
import render from "react-test-renderer";
import {Tabs} from "./tabs";
import {TABS} from "./tabs";

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

it(`render overview`, () => {
  const tabs = render.create(<Tabs film={film}/>);
  tabs.root.instance.setState({activeTab: TABS.overview});

  const three = tabs.toJSON();

  expect(three).toMatchSnapshot();
});

it(`render details`, () => {
  const tabs = render.create(<Tabs film={film}/>);
  tabs.root.instance.setState({activeTab: TABS.details});

  const three = tabs.toJSON();

  expect(three).toMatchSnapshot();
});

it(`render reviews`, () => {
  const tabs = render.create(<Tabs film={film}/>);
  tabs.root.instance.setState({activeTab: TABS.reviews});

  const three = tabs.toJSON();

  expect(three).toMatchSnapshot();
});
