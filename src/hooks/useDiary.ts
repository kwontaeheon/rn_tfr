import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { addDiary, removeDiary, modifyDiary, fetchMoreDiary } from '../modules/diaryManager';
import { useCallback } from 'react';

export default function useDiaryManager() {
  const diary  = useSelector((state: RootState) => state.diaryManager.diary);
  const dispatch = useDispatch();

  const onAddDiary = useCallback((email: string, name: string, title: string , contents: string, id: string) => dispatch(addDiary({email, name, title, contents, id})), [dispatch]);
  const onRemoveDiary = useCallback((email: string, name: string,  title: string , contents: string, id: string) => dispatch(removeDiary({email, name, title, contents, id})), [dispatch]);
  const onModifyDiary = useCallback((email: string, name: string, title: string , contents: string, id: string) => dispatch(modifyDiary({email, name, title, contents, id})), [dispatch]);
  const onFetchMoreDiary = useCallback(( ) => dispatch(fetchMoreDiary()),  [dispatch] );

  return {
    diary,
    onAddDiary,
    onRemoveDiary,
    onModifyDiary,
    onFetchMoreDiary
  };
}
