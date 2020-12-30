import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { RootState } from '../modules';
import { addDiary, removeDiary, modifyDiary, fetchMoreDiary, diaryData } from '../modules/diaryManager';
import { useCallback } from 'react';


import axios from 'axios';
function getContentsAfter(email: string, rIdx: number) {
  
    console.log("ridx:" + rIdx + "email: " + email);
    const data = {
      "from" : rIdx, 
      "size" : 50,
      "query": {
        "bool": {
          "must": [],
          "filter": [
            {
              "query_string": {
                "query": "*"
              }
            }
          ],
          "should": [],
          "must_not": []
        }
      },
      "highlight": {
        "pre_tags": [
          "<b>"
        ],
        "post_tags": [
          "</b>"
        ],
        "fields": {
          "*": {}
        }
      }
    }

    const config  = {
      headers: {
        'Content-Type': 'application/json' ,
        'Authorization': 'Basic dmlld2VyOnJuanN4b2dqc0Ax'
      }
    }
    // console.log(paramJson);
    return axios.post('http://maum.cf:9222/maumilgi-diary-contents/_search', data, config);
    
  ; 
};

export default function useDiaryManager() {
  const diary  = useSelector((state: RootState) => state.diaryManager.diary);
  const lIdx = useSelector((state: RootState) => state.diaryManager.lIdx);
  const rIdx = useSelector((state: RootState) => state.diaryManager.rIdx);
  const dispatch = useDispatch();

  const onAddDiary = useCallback((email: string, name: string, title: string , contents: string, id: string) => dispatch(addDiary({email, name, title, contents, id})), [dispatch]);
  const onRemoveDiary = useCallback((email: string, name: string,  title: string , contents: string, id: string) => dispatch(removeDiary({email, name, title, contents, id})), [dispatch]);
  const onModifyDiary = useCallback((email: string, name: string, title: string , contents: string, id: string) => dispatch(modifyDiary({email, name, title, contents, id})), [dispatch]);
  
  const onFetchMoreDiary = useCallback((email: string, rIdx: number)  => {
      getContentsAfter(email, rIdx).then(result => {
        // console.log(result.config);
        // console.log(result.status);
        // console.log(result.request);
        // console.log(result.data);
        // console.log(new Date());
      const resultArr = result.data.hits.hits 
      
      let resTypedArr = Array<diaryData>();
      //for문을 돌면서 contact[i]의 key 값을 가져와 value값 출력해준다.
          for (var i = 0; i < resultArr.length; i++) {
            resTypedArr = resTypedArr.concat(
              { email: resultArr[i]._source.email,
                name:  resultArr[i]._source.name,
                title: resultArr[i]._source.title,
                contents: resultArr[i]._source.contents,
                id: resultArr[i]._source.email + resultArr[i]._id
              });
          }
        dispatch(fetchMoreDiary(resTypedArr))
      })
    
  },  [dispatch] );

  const onFetchMoreDiaryPublic = useCallback((email: string, rIdx: number)  => {
    getContentsAfter("", rIdx).then(result => {
      // console.log(result.config);
      // console.log(result.status);
      // console.log(result.request);
      // console.log(result.data);
      // console.log(new Date());
    const resultArr = result.data.hits.hits 
    
    let resTypedArr = Array<diaryData>();
    //for문을 돌면서 contact[i]의 key 값을 가져와 value값 출력해준다.
        for (var i = 0; i < resultArr.length; i++) {
          resTypedArr = resTypedArr.concat(
            { email: resultArr[i]._source.email,
              name:  resultArr[i]._source.name,
              title: resultArr[i]._source.title,
              contents: resultArr[i]._source.contents,
              id: resultArr[i]._source.email + resultArr[i]._id
            });
        }
      dispatch(fetchMoreDiary(resTypedArr))
    })
  
},  [dispatch] );
  
    
    

  return {
    diary,
    lIdx,
    rIdx,
    onAddDiary,
    onRemoveDiary,
    onModifyDiary,
    onFetchMoreDiary,
    onFetchMoreDiaryPublic
  };
}
