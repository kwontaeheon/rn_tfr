// https://github.com/aprofromindia/StudentList

// Actions
const LOAD: 'app/searchData/LOAD' = 'app/searchData/LOAD';
const CREATE: 'app/searchData/CREATE' = 'app/searchData/CREATE';
const UPDATE: 'app/searchData/UPDATE' = 'app/searchData/UPDATE';
const REMOVE: 'app/searchData/REMOVE' = 'app/searchData/REMOVE';

export interface SearchData {
    key: string;
    name: string;
    id: string;
    title: string;
    diary: string;
}

const initialState: Array<SearchData> = [
    { key: '1', name: 'John', id: '2', title: 'First Story', diary: 'story contents' },
    { key: '2', name: 'Tom', id: '5', title: 'First Story', diary: 'story contents'  },
    { key: '3', name: 'John', id: '2' , title: 'First Story', diary: 'story contents' },
    { key: '4', name: 'Tom', id: '5' , title: 'First Story', diary: 'story contents' },
    { key: '5', name: 'John', id: '2',title: 'First Story', diary: 'story contents' },
    { key: '6', name: 'Tom', id: '5' , title: 'First Story', diary: 'story contents' },
    { key: '7', name: 'John', id: '2' ,title: 'First Story', diary: 'story contents' },
    { key: '8', name: 'Tom', id: '5' , title: 'First Story', diary: 'story contents' },
    { key: '9', name: 'Tom', id: '5' ,title: 'First Story', diary: 'story contents' },
    { key: '10', name: 'Tom', id: '5',title: 'First Story', diary: 'story contents' }

];

type Action = LoadAction | CreateAction | UpdateAction | RemoveAction;

// Reducer
export default function searchData(state: Array<SearchData> = initialState, action: Action) {
    switch (action.type) {
        case CREATE:
            return [...state, action.payload];
        case UPDATE:
            return state.map(item => item.key === action.payload.key ? action.payload : item);
        case REMOVE:
            return state.filter(item => item.key !== action.payload.key);
        case LOAD:
            console.log("LOAD!!");
            let element : SearchData = { key: `${state.length + 1}`, name: 'Tom', id: '5',title: `${state.length} Story`, diary: 'story contents' };
            console.log(element); 
            console.log(state);
            console.log(state.filter(item => item.key !== action.payload.key));
            console.log('after elem')
            return [...state];
        default:
            return state;
    }
}

// Action Creators
interface LoadAction { type: typeof LOAD; payload: SearchData;}
export function loadSearchData(type: typeof LOAD) {
    console.log('load more!')
    return searchData(  {type: LOAD, payload: {
        key: "",
        name: "",
        id: "",
        title: "",
        diary: ""
    }});
    // return  { type: LOAD, payload };
}

interface CreateAction { type: typeof CREATE; payload: SearchData; }
export function createSearchData(payload: SearchData): CreateAction {
    return { type: CREATE, payload };
}

interface UpdateAction { type: typeof UPDATE; payload: SearchData; }
export function updateSearchData(payload: SearchData): UpdateAction {
    return { type: UPDATE, payload };
}

interface RemoveAction { type: typeof REMOVE; payload: SearchData; }
export function removeSearchData(payload: SearchData): RemoveAction {
    return { type: REMOVE, payload };
}
