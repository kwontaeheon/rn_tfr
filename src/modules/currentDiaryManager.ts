import { Reducer } from 'react';
import { createAction, createReducer } from 'typesafe-actions';
import axios from 'axios';

export const modifyDiary = createAction('cdiary/MODIFY') <currentDiaryData>();


export interface currentDiaryData {
  cont_id: string;
  title: string;
  contents: string;
  query: string;
  queryPublic: string;
}

type CurrentDiaryState = {
  diary: currentDiaryData
}

const initialState: CurrentDiaryState = {
  diary: 
  {
    cont_id: "",
    title: "",
    contents: "",
    query: "",
    queryPublic: ""
  }
};




const currentDiaryManager  = createReducer(initialState)
  .handleAction(modifyDiary, (state, action) => {return ({ 
    diary: action.payload })});  

export default currentDiaryManager;
