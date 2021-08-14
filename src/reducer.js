import films from "./mocks/films";

const VISIBLE_COUNT_OF_FILMS = 8;

const getFilteredFilmsByGenre = (genre) => {
  if (genre === `All genres`) {
    return initialState.allFilms;
  }
  return initialState.allFilms.filter((film) => film.genre === genre);
};

const initialState = {
  genre: `All genres`,
  allFilms: films,
  visibleCountOfFilms: VISIBLE_COUNT_OF_FILMS,
};

const ActionTypes = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionTypes.CHANGE_GENRE,
    payload: genre
  }),
  showMoreFilms: () => ({
    type: ActionTypes.SHOW_MORE_FILMS,
    payload: VISIBLE_COUNT_OF_FILMS
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_GENRE:
      return Object.assign({}, state, {genre: action.payload, visibleCountOfFilms: VISIBLE_COUNT_OF_FILMS});
    case ActionTypes.SHOW_MORE_FILMS:
      const newVisibleCountOfFilms = state.visibleCountOfFilms + action.payload;
      return Object.assign({}, state, {visibleCountOfFilms: newVisibleCountOfFilms});
  }
  return state;
};

export {reducer, ActionCreator, ActionTypes, getFilteredFilmsByGenre};
