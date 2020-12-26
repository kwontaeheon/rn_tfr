import { Reducer } from 'react';
import { createAction, createReducer } from 'typesafe-actions';

export const loginSuccess = createAction('login/SUCCESS')<loginData>();



export interface loginData {
  accessToken: string;
  email: string;
  familyName: string;
  givenName: string;
  id: string;
  name: string;
  photoUrl: string;
}

type LoginState = {
  login: loginData
};

const initialState: LoginState = {
  login: {accessToken: "", email: "", familyName: "", givenName: "", id: "", name: "", photoUrl: ""}
  
};
// {
//   "accessToken": "ya29.a0AfH6SMAsQb2wmr2_NuUAfpERvPdZObnaJ1a6KDcYiChP4OcIGp015hGo_LOk8NfBvQ4zEZaxlvYTZGDMG4fXTimoi635SBZ-13H2i0Ll9srgcrH9Wis6hJjPERUkaGWd7s5tCfmqQcofZ-NIZaweXo-gk0UjgO2tl3Ii2mEDWEY",
//   "email": "kwontaeheon@gmail.com",
// "familyName": "Kwon",
// "givenName": "Taeheon",
// "id": "105487263462602985397",
// "name": "Taeheon Kwon",
// "photoUrl": "https://lh3.googleusercontent.com/-SHl9nxC-w1o/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckMqTtpzHdqN05V-uHGnO0UfbDZJg/s96-c/photo.jpg"
// }
   


const loginManager  = createReducer(initialState)
  .handleAction(loginSuccess, (state, action) => ({ login: action.payload }))
  ;

export default loginManager;
