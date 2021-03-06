import { combineReducers } from 'redux';
import diaryManager from './diaryManager';
import currentDiaryManager from './currentDiaryManager';
import modifyDiaryManager from './modifyDiaryManager';
import loginManager from './loginManager';
import publicDiaryManager from './publicDiaryManager';

import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  // 새로운 persist config를 선언해준다.
  key: 'root',
  // reducer 객체의 어느 지점에서 부터 데이터를 저장할 것인지 설정해주는것이 key이다.
  // root부터 시작한다고 지정해준다.
  storage: AsyncStorage,
  // 위에 import 한 성격의 storage를 지정해준다. 이 예제의 경우에는 localstorage
  whitelist: [ "loginManager"],
  // 유지 및 보존하고 싶은 데이터를 배열안에 지정해준다. 
  // string 형태이고 아래 combineReducers에 지정된 값들을 사용해주면 된다. 
};



const rootReducer = combineReducers({
  currentDiaryManager,
  modifyDiaryManager,
  diaryManager,
  loginManager,
  publicDiaryManager
});

// export default rootReducer;
export default persistReducer(persistConfig, rootReducer);
// persistReducer 함수안에 persistConfig와  rootReducer를 넣어서 export default 해준다.
// 이 뜻은 수정된 rootReducer를 persistConfig의 조건에 맞게 persist하여 export 하겠다는 뜻이다. 
// 단순하게 rootReducer에 persist능력을 추가해준것이다. 


export type RootState = ReturnType<typeof rootReducer>;
