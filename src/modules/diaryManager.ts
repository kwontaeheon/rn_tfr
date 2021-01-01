import { Reducer } from 'react';
import { createAction, createReducer } from 'typesafe-actions';

export const addDiary = createAction('diary/ADD')<diaryData>();
export const removeDiary = createAction('diary/REMOVE')<diaryData>();
export const modifyDiary = createAction('diary/MODIFY')<diaryData>(); // payload 타입을 Generics 로 설정해주세요.
export const fetchMoreDiary = createAction('diary/FETCHMORE')<Array<diaryData>>(); 
export const fetchDiary = createAction('diary/FETCH')<Array<diaryData>>(); 


export interface diaryData {
  timestamp: Date;
  email: string;
  name: string;
  title: string;
  contents: string;
  id: string;
}

type DiaryState = {
  diary: Array<diaryData>,
  lIdx: number,
  rIdx: number
};

const initialState: DiaryState = {
  diary: [
    // {email: "1id", name: "tk", title: "1ti2222t", contents: "1cont", id: "1did"},
    // {email: "1id", name: "tk", title: "1tit", contents: "1cont", id: "2did"},
    // {email: "1id", name: "tk", title: "1tit", contents: "1cont", id: "3did"},
    // {email: "1id", name: "tk", title: "1tit", contents: "1cont", id: "4did"},
    // {email: "1id", name: "tk", title: "1tit", contents: "1cont", id: "5did"},
    // {email: "1id", name: "tk", title: "1tit", contents: "1cont", id: "6did"},
    // {email: "1id", name: "tk", title: "1tit", contents: "1cont", id: "7did"},
    // {email: "1id", name: "tk", title: "1tit", contents: "1cont", id: "8did"},
    // {email: "1id", name: "tk", title: "1tit", contents: "1cont", id: "9did"},
    // {email: "1id", name: "tk", title: "1tit", contents: "1cont", id: "10did"},
  ],
  lIdx: 0,
  rIdx: 0
};




const diaryManager  = createReducer(initialState)
  .handleAction(addDiary, (state, action) => {({ diary: state.diary + action.payload, lIdx: state.lIdx, rIdx: state.rIdx+1 })})
  .handleAction(removeDiary, (state, action) => (
    { diary: state.diary }))
  .handleAction(modifyDiary, (state, action) => (
    { diary: state.diary  }))
  .handleAction(fetchMoreDiary, (state, action) => {
    return ({ diary: state.diary.concat(action.payload)
      , lIdx: state.lIdx
       , rIdx: state.rIdx + action.payload.length });
    })
  .handleAction(fetchDiary, (state, action) => {
    return ({ diary: action.payload
      , lIdx: state.lIdx
       , rIdx: action.payload.length });
  });
  

export default diaryManager;
