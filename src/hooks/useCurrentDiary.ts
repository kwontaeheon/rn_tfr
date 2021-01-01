import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { modifyDiary  } from '../modules/currentDiaryManager';
import { useCallback } from 'react';

export default function useCurrentDiaryManager() {
  const currentDiary  = useSelector((state: RootState) => state.currentDiaryManager.diary);
  const dispatch = useDispatch();

  const onModifyCurrentDiary = useCallback(async (title: string, contents: string, query: string) => 
    dispatch(modifyDiary({title, contents, query}))
    , [dispatch]);

  return {
    currentDiary,
    onModifyCurrentDiary
  };
}
