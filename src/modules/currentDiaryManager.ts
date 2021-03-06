import { Reducer } from 'react';
import { createAction, createReducer } from 'typesafe-actions';
import axios from 'axios';

export const modifyCurrentDiary = createAction('cdiary/MODIFY') <currentDiaryData>();


export interface currentDiaryData {
  cont_id: string;
  title: string;
  contents: string;
  query: string;
  queryPublic: string;
  public_tf: string;
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
    queryPublic: "",
    public_tf: "",
  }
};




const currentDiaryManager  = createReducer(initialState)
  .handleAction(modifyCurrentDiary, (state, action) => {
    
    console.log('payload:' , action.payload);
    return ({ 
    diary: action.payload })});  

export default currentDiaryManager;
