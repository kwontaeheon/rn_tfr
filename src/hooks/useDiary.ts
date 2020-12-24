import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { addDiary, removeDiary, modifyDiary, fetchMoreDiary } from '../modules/diaryManager';
import { useCallback } from 'react';

export default function useDiaryManager() {
  const diaryManager  = useSelector((state: RootState) => state.diaryManager.diary);
  const dispatch = useDispatch();

  const onAddDiary = useCallback((uid: string, title: string , contents: string, did: string) => dispatch(addDiary({uid, title, contents, did})), [dispatch]);
  const onRemoveDiary = useCallback((uid: string, title: string , contents: string, did: string) => dispatch(removeDiary({uid, title, contents, did})), [dispatch]);
  const onModifyDiary = useCallback((uid: string, title: string , contents: string, did: string) => dispatch(modifyDiary({uid, title, contents, did})), [dispatch]);
  const onFetchMoreDiary = useCallback(( ) => dispatch(fetchMoreDiary()),  [dispatch] );

  return {
    diaryManager,
    onAddDiary,
    onRemoveDiary,
    onModifyDiary,
    onFetchMoreDiary
  };
}
