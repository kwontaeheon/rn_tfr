import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { loginSuccess  } from '../modules/loginManager';
import { useCallback } from 'react';

export default function useLoginManager() {
  const login  = useSelector((state: RootState) => state.loginManager.login);
  const dispatch = useDispatch();

  const onLoginSuccess = useCallback((
    accessToken: string, email: string , familyName: string, givenName: string, id: string, name: string, photoUrl: string) => dispatch(loginSuccess({accessToken, email, familyName, givenName, id, name, photoUrl})), [dispatch]);
  

  return {
    login,
    onLoginSuccess,
  };
}
