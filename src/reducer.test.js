import {reducer, ActionTypes} from "./reducer";
import films from "./mocks/films";

it(`return initial state`, function () {
  const foo = reducer(undefined, {});
  expect(foo).toMatchObject({
    genre: `All genres`,
    allFilms: films,
  });
});

it(`change genre`, function () {
  const foo = reducer(undefined, {
    type: ActionTypes.CHANGE_GENRE,
    payload: `Drama`
  });
  expect(foo).toMatchObject({
    genre: `Drama`,
    allFilms: films,
  });
});
