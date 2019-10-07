import * as ActionType from '../../actions';

const defaultState = {
  loading: false,
  error: null,
  data: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return { ...state, loading: true };

    case ActionType.LOAD_FILMS_SUCCESS:
      return {
        ...state,
        data: action.data.results,
        loading: false,
        error: null
      };

    case ActionType.LOAD_FILMS_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default reducer;
