const VISIBLE_COUNT_OF_FILMS = 8;

const getFilteredFilmsByGenre = (genre) => {
  if (genre === `All genres`) {
    return initialState.allFilms;
  }
  return initialState.allFilms.filter((film) => film.genre === genre);
};

const adapter = (film) => {
  return {
    id: film.id,
    name: film.name,
    previewImage: film.preview_image,
    backgroundImage: film.background_image,
    posterImage: film.poster_image,
    genre: film.genre,
    released: film.released,
    description: film.description,
    rating: film.rating,
    scoresCount: film.scores_count,
    director: film.director,
    starring: film.starring,
    runTime: film.run_time,
    videoLink: film.video_link,
    previewVideoLink: film.preview_video_link,
    backgroundColor: film.background_color,
    isFavorite: film.is_favorite,
  };
};

const adapterForArray = (backendData) => {
  return backendData.map((film) => {
    return adapter(film);
  });
};

const initialState = {
  genre: `All genres`,
  allFilms: [],
  visibleCountOfFilms: VISIBLE_COUNT_OF_FILMS,
};

const ActionTypes = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  LOAD_FILMS: `LOAD_FILMS`
};

// const Operation = {
//   loadFilms: ()=>(dispatch, getState, api) => {
//     return api.get(`/films`)
//       .then((response) => {
//         console.log(response);
//         const films = adapterForArray(response.data);
//         dispatch(ActionCreator.loadFilms(films));
//       });
//   }
// };

const Operation = {
  loadFilms: ()=>(dispatch) => {
    fetch(`https://4.react.pages.academy/wtw/films`, {
      method: `GET`,
      credentials: `include`,
      timeout: 5000,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const films = adapterForArray(data);
        dispatch(ActionCreator.loadFilms(films));
      })
  }
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionTypes.CHANGE_GENRE,
    payload: genre
  }),
  showMoreFilms: () => ({
    type: ActionTypes.SHOW_MORE_FILMS,
    payload: VISIBLE_COUNT_OF_FILMS
  }),
  loadFilms: (data) => ({
    type: ActionTypes.LOAD_FILMS,
    payload: data
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_GENRE:
      return Object.assign({}, state, {genre: action.payload, visibleCountOfFilms: VISIBLE_COUNT_OF_FILMS});
    case ActionTypes.SHOW_MORE_FILMS:
      const newVisibleCountOfFilms = state.visibleCountOfFilms + action.payload;
      return Object.assign({}, state, {visibleCountOfFilms: newVisibleCountOfFilms});
    case ActionTypes.LOAD_FILMS:
      return Object.assign({}, state, {allFilms: action.payload});
  }
  return state;
};

export {reducer, ActionCreator, ActionTypes, getFilteredFilmsByGenre, Operation};
