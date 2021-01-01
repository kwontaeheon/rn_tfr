import { Reducer } from 'react';
import { createAction, createReducer } from 'typesafe-actions';
import axios from 'axios';

export const modifyDiary = createAction('cdiary/MODIFY') <currentDiaryData>();


export interface currentDiaryData {
  title: string;
  contents: string;
  query: string;
}

type CurrentDiaryState = {
  diary: currentDiaryData
}

const initialState: CurrentDiaryState = {
  diary: 
  {
    title: "",
    contents: "",
    query: ""
  }
};




const currentDiaryManager  = createReducer(initialState)
  .handleAction(modifyDiary, (state, action) => {return ({ 
    diary: action.payload })});  

export default currentDiaryManager;
