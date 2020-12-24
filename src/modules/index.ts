import { combineReducers } from 'redux';
import counter from './counter';
import diaryManager from './diaryManager';

import searchData from '../redux/searchData';

const rootReducer = combineReducers({
  counter,
  diaryManager,
  searchData,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
