import { Reducer } from 'react';
import { createAction, createReducer } from 'typesafe-actions';
import axios from 'axios';

export const modifyMDiary = createAction('mdiary/MODIFY') <modifyDiaryData>();


export interface modifyDiaryData {
  cont_id: string;
  title: string;
  contents: string;
  query: string;
  queryPublic: string;
  public_tf: string;
}

type ModifyDiaryState = {
  diary: modifyDiaryData
}

const initialState: ModifyDiaryState = {
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




const modifyDiaryManager  = createReducer(initialState)
  .handleAction(modifyMDiary, (state, action) => {
    console.log('payload:' , action.payload);
    return ({ 
    diary: action.payload })});  

export default modifyDiaryManager;
