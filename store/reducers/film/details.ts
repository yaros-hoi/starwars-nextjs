import * as ActionType from '../../actions';

const defaultState = {
  loading: false,
  error: null,
  data: {}
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM:
      return { ...state, data: {}, loading: true };

    case ActionType.LOAD_FILM_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: null
      };

    case ActionType.LOAD_FILM_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default reducer;
