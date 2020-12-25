import { Reducer } from 'react';
import { createAction, createReducer } from 'typesafe-actions';

export const addDiary = createAction('diary/ADD')<diaryData>();
export const removeDiary = createAction('diary/REMOVE')<diaryData>();
export const modifyDiary = createAction('diary/MODIFY')<diaryData>(); // payload 타입을 Generics 로 설정해주세요.
export const fetchMoreDiary = createAction('diary/FETCH')(); 


export interface diaryData {
  uid: string;
  title: string;
  contents: string;
  id: string;
}

type DiaryState = {
  diary: Array<diaryData>
};

const initialState: DiaryState = {
  diary: [
    {uid: "1id", title: "1tit", contents: "1cont", id: "1did"},
    {uid: "1id", title: "1tit", contents: "1cont", id: "2did"},
    {uid: "1id", title: "1tit", contents: "1cont", id: "3did"},
    // {uid: "1id", title: "1tit", contents: "1cont", id: "4did"},
    // {uid: "1id", title: "1tit", contents: "1cont", id: "5did"},
    // {uid: "1id", title: "1tit", contents: "1cont", id: "6did"},
    // {uid: "1id", title: "1tit", contents: "1cont", id: "7did"},
    // {uid: "1id", title: "1tit", contents: "1cont", id: "8did"},
    // {uid: "1id", title: "1tit", contents: "1cont", id: "9did"},
  ]
};

// addDiary(uid, title, contents)
// removeDiary(did)
// modifyDiary(did, title, contents)
// fetchMoreDiary()


const diaryManager  = createReducer(initialState)
  .handleAction(addDiary, (state, action) => ({ diary: state.diary + action.payload }))
  .handleAction(removeDiary, (state, action) => (
    { diary: state.diary }))
  .handleAction(modifyDiary, (state, action) => (
    { diaty: state.diary  }))
  .handleAction(fetchMoreDiary, state => (
    { diary: state.diary.concat({uid: "1i2d", title: "2tit", contents: "2cont", id: "10did"}) }
    ));

export default diaryManager;
