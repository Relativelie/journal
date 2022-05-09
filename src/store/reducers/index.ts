import { combineReducers } from 'redux';
import { sendRequestReducer } from './sendRequestReducer';
import { tableReducer } from './tableReducer';
import { filterReducer } from './filterReducer';
import { paginationReducer } from './paginationReducer';
import { searchReducer } from './searchReducer';

export const reducers = {
    sendRequestReducer,
    tableReducer,
    filterReducer,
    paginationReducer,
    searchReducer,
};

export const rootReducer = combineReducers(
    reducers,
);
export type RootState = ReturnType<typeof rootReducer>;
