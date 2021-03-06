import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { modifyMDiary  } from '../modules/modifyDiaryManager';
import { useCallback } from 'react';

export default function useCurrentDiaryManager() {
  const modifyDiary  = useSelector((state: RootState) => state.modifyDiaryManager.diary);
  const dispatch = useDispatch();

  const onModifyMDiary = useCallback(async (cont_id: string, title: string, contents: string, query: string, queryPublic: string, public_tf: string) => 
    
    dispatch(modifyMDiary({cont_id, title, contents, query, queryPublic, public_tf}))
    
    , [dispatch]);

  return {
    modifyDiary,
    onModifyMDiary
  };
}
