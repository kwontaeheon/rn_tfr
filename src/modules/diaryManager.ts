import { Reducer } from 'react';
import { createAction, createReducer } from 'typesafe-actions';

export const addDiary = createAction('diary/ADD')<diaryData>();
export const removeDiary = createAction('diary/REMOVE')<diaryData>();
export const modifyDiary = createAction('diary/MODIFY')<diaryData>(); // payload 타입을 Generics 로 설정해주세요.
export const fetchMoreDiary = createAction('diary/FETCH')(); 


export interface diaryData {
  email: string;
  name: string;
  title: string;
  contents: string;
  id: string;
}

type DiaryState = {
  diary: Array<diaryData>
};

const initialState: DiaryState = {
  diary: [
    {email: "1id", name: "tk", title: "1tit", contents: "1cont", id: "1did"},
    {email: "1id", name: "tk", title: "1tit", contents: "1cont", id: "2did"},
    {email: "1id", name: "tk", title: "1tit", contents: "1cont", id: "3did"},
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
    { diary: state.diary.concat({email: "1i2d", name: "tk", title: "2tit", contents: "2cont", id: "10did"}) }
    ));

export default diaryManager;
