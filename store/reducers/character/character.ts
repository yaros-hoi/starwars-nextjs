import * as ActionType from '../../actions';

const defaultState = {
  loading: false,
  error: null,
  data: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.LOAD_CHARACTER:
      return { ...defaultState, loading: true };

    case ActionType.LOAD_CHARACTER_SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.data),
        loading: false,
        error: null
      };

    case ActionType.LOAD_CHARACTER_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default reducer;
