import { Reducer } from 'react';
import { createAction, createReducer } from 'typesafe-actions';
import axios from 'axios';

export const modifyCurrentPublicDiary = createAction('CurrentPublicDiary/MODIFY') <currentPublicDiaryData>();


export interface currentPublicDiaryData {
  cont_id: string;
  title: string;
  contents: string;
  query: string;
  queryPublic: string;
  public_tf: string;
}

type CurrentPublicDiaryState = {
  diary: currentPublicDiaryData
}

const initialState: CurrentPublicDiaryState = {
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




const currentPublicDiaryManager  = createReducer(initialState)
  .handleAction(modifyCurrentPublicDiary, (state, action) => {
    console.log('payload:' , action.payload);
    return ({ 
    diary: action.payload })});  

export default currentPublicDiaryManager;
