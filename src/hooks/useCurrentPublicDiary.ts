import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { modifyCurrentPublicDiary  } from '../modules/currentPublicDiaryManager';
import { useCallback } from 'react';

export default function useCurrentPublicDiaryManager() {
  const currentPublicDiary  = useSelector((state: RootState) => state.currentPublicDiaryManager.diary);
  const dispatch = useDispatch();

  const onModifyCurrentPublicDiary = useCallback(async (cont_id: string, title: string, contents: string, query: string, queryPublic: string, public_tf: string) => 
    
    dispatch(modifyCurrentPublicDiary({cont_id, title, contents, query, queryPublic, public_tf}))
    
    , [dispatch]);

  return {
    currentPublicDiary,
    onModifyCurrentPublicDiary
  };
}
