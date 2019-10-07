import { combineReducers } from 'redux';

import list from './film/list';
import details from './film/details';
import character from './character/character';
import planet from './planet/details';

export const rootReducer = combineReducers({
  films: list,
  film: details,
  character,
  planet
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
