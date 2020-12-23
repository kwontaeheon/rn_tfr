import { combineReducers } from 'redux';
import counter from './counter';

import searchData from '../redux/searchData';

const rootReducer = combineReducers({
  counter,
  searchData,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
