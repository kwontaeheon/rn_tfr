import { createStore, combineReducers } from 'redux';
import searchData from './searchData';

export default createStore(combineReducers({ searchData }));
