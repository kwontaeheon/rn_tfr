import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { RootState } from '../modules';
import { addDiary, removeDiary, modifyDiary, fetchMoreDiary, fetchDiary,  diaryData } from '../modules/diaryManager';
import { useCallback } from 'react';


import axios from 'axios';
function getContentsAfter(email: string, rIdx: number, queryString: string, initialTF: boolean) {
    console.log("rIdx:" + rIdx + "email: " + email + "queryString:" +  queryString + "intitialTF:" + initialTF);
    let fromIdx = 0
    if (initialTF != true) {
      fromIdx = rIdx
    }
    let queryBase: any = {
      "from": fromIdx,
      "size": 50,
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
      },
      "sort" : [{ "@timestamp" : "desc" }]
    }
    if (queryString != "" && email != "") {

      // 문자열 필터를 적용
      queryBase.query = {
        "bool": {
          "filter": [
            {
              "bool": {
                "should": [
                  {
                    "bool": {
                      "should": [
                        {
                          "match_phrase": {
                            "contents": queryString                                }
                        }
                      ],
                      "minimum_should_match": 1
                    }
                  },
                  {
                    "bool": {
                      "should": [
                        {
                          "match_phrase": {
                            "title": queryString
                          }
                        }
                      ],
                      "minimum_should_match": 1
                    }
                  }
                ],
                "minimum_should_match": 1
              }
            },
            {
              "bool": {
                "should": [
                  {
                    "match": {
                      "email": email
                    }
                  }
                ],
                "minimum_should_match": 1
              }
            }
          ]
        }
      }
    }

    else if (email != "") {
      // 이메일 필터만 적용 
      queryBase.query = {
          "bool": {
          "filter": [
            {
              "bool": {
                "should": [
                  {
                    "match": {
                      "email": email
                    }
                  }
                ],
                "minimum_should_match": 1
              }
            }
          ]
        }
      }
    }

    else if (queryString != "") {
      // 문자열 필터만 적용
      queryBase.query = {
        "bool": {
          "filter": [
            {
              "bool": {
                "should": [
                  {
                    "bool": {
                      "should": [
                        {
                          "match_phrase": {
                            "contents": queryString                                }
                        }
                      ],
                      "minimum_should_match": 1
                    }
                  },
                  {
                    "bool": {
                      "should": [
                        {
                          "match_phrase": {
                            "title": queryString
                          }
                        }
                      ],
                      "minimum_should_match": 1
                    }
                  }
                ],
                "minimum_should_match": 1
              }
            }
          ]
        }
      }
    }


    

    const config  = {
      headers: {
        'Content-Type': 'application/json' ,
        'Authorization': 'Basic dmlld2VyOnJuanN4b2dqc0Ax'
      }
    }
    console.log(queryBase);
    return axios.post('http://maum.cf:9222/maumilgi-diary-contents/_search', queryBase, config);
    
  ; 
};



export default function useDiaryManager() {
  const diary  = useSelector((state: RootState) => state.diaryManager.diary);
  const lIdx = useSelector((state: RootState) => state.diaryManager.lIdx);
  const rIdx = useSelector((state: RootState) => state.diaryManager.rIdx);
  const dispatch = useDispatch();

  const onAddDiary = useCallback((timestamp: Date, email: string, name: string, title: string , contents: string, id: string) => dispatch(addDiary({timestamp, email, name, title, contents, id})), [dispatch]);
  const onRemoveDiary = useCallback((timestamp: Date, email: string, name: string,  title: string , contents: string, id: string) => dispatch(removeDiary({timestamp, email, name, title, contents, id})), [dispatch]);
  const onModifyDiary = useCallback((timestamp: Date, email: string, name: string, title: string , contents: string, id: string) => dispatch(modifyDiary({timestamp, email, name, title, contents, id})), [dispatch]);
  
  const onFetchMoreDiary = useCallback((email: string, rIdx: number, queryString: string, initialTF: boolean)  => {
    

    getContentsAfter(email, rIdx, queryString, initialTF).then(result => {
        // console.log(result.config);
        // console.log(result.status);
        // console.log(result.request);
        // console.log(result.data);
        // console.log(new Date());
      const resultArr = result.data.hits.hits 
      console.log(resultArr);
      let resTypedArr = Array<diaryData>();
      //for문을 돌면서 contact[i]의 key 값을 가져와 value값 출력해준다.
      for (var i = 0; i < resultArr.length; i++) {
        resTypedArr = resTypedArr.concat(
          { timestamp: resultArr[i]._source['@timestamp'],
            email: resultArr[i]._source.email,
            name:  resultArr[i]._source.name,
            title: resultArr[i]._source.title,
            contents: resultArr[i]._source.contents,
            id: resultArr[i]._source.email + resultArr[i]._id
          });
      }
        
      if (initialTF) {
        dispatch(fetchDiary(resTypedArr))
      }
      else {
        dispatch(fetchMoreDiary(resTypedArr))
      }  })
    
  },  [dispatch] );

    
    

  return {
    diary,
    lIdx,
    rIdx,
    onAddDiary,
    onRemoveDiary,
    onModifyDiary,
    onFetchMoreDiary
    
  };
}
