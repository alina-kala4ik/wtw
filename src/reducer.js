const initialState = {
  genre: `All genres`,
  allFilms: [],
};

const ActionTypes = {
  CHANGE_GENRE: `CHANGE_GENRE`,
};

const ActionCreator = {
  changeGenre: (genre) => (
    {
      type: ActionTypes.CHANGE_GENRE,
      payload: genre
    }
  )
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_GENRE:
      return Object.assign({}, state, {genre: action.payload});
  }
  return state;
};

export {reducer, ActionCreator, ActionTypes};
