import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { modifyDiary  } from '../modules/currentDiaryManager';
import { useCallback } from 'react';

export default function useCurrentDiaryManager() {
  const currentDiary  = useSelector((state: RootState) => state.currentDiaryManager.diary);
  const dispatch = useDispatch();

  const onModifyCurrentDiary = useCallback(async (cont_id: string, title: string, contents: string, query: string, queryPublic: string, public_tf: string) => 
    dispatch(modifyDiary({cont_id, title, contents, query, queryPublic, public_tf}))
    , [dispatch]);

  return {
    currentDiary,
    onModifyCurrentDiary
  };
}
