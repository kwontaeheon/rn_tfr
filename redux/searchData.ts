// Actions
const LOAD: 'app/searchData/LOAD' = 'app/searchData/LOAD';
const CREATE: 'app/searchData/CREATE' = 'app/searchData/CREATE';
const UPDATE: 'app/searchData/UPDATE' = 'app/searchData/UPDATE';
const REMOVE: 'app/searchData/REMOVE' = 'app/searchData/REMOVE';

export interface SearchData {
    key: string;
    name: string;
    class: number;
}

const initialState: ReadonlyArray<SearchData> = [
    { key: '1', name: 'John', class: 2 },
    { key: '2', name: 'Tom', class: 5 },
    { key: '3', name: 'John', class: 2 },
    { key: '4', name: 'Tom', class: 5 },
    { key: '5', name: 'John', class: 2 },
    { key: '6', name: 'Tom', class: 5 },
    { key: '7', name: 'John', class: 2 },
    { key: '8', name: 'Tom', class: 5 },
    { key: '9', name: 'Tom', class: 5 },
    { key: '10', name: 'Tom', class: 5 }

];

type Action = LoadAction | CreateAction | UpdateAction | RemoveAction;

// Reducer
export default function searchData(state: ReadonlyArray<SearchData> = initialState, action: Action) {
    switch (action.type) {
        case CREATE:
            return [...state, action.payload];
        case UPDATE:
            return state.map(item => item.key === action.payload.key ? action.payload : item);
        case REMOVE:
            return state.filter(item => item.key !== action.payload.key);
        default:
            return state;
    }
}

// Action Creators
interface LoadAction { type: typeof LOAD; }
export function loadSearchData(): LoadAction {
    return { type: LOAD };
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
