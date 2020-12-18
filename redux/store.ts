import { createStore, combineReducers } from 'redux';
import searchData from './searchData';

const store = createStore(combineReducers({ searchData }));  // searchData:  reducer 

export default store;

