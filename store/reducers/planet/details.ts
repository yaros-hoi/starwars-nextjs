import * as ActionType from '../../actions';

const defaultState = {
  loading: false,
  error: null,
  data: {}
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PLANET:
      return { ...state, data: {}, loading: true };

    case ActionType.LOAD_PLANET_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: null
      };

    case ActionType.LOAD_PLANET_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default reducer;
