import { combineReducers } from 'redux';
import { sendRequestReducer } from './sendRequestReducer';
import { tableReducer } from './tableReducer';
import { filterReducer } from './filterReducer';
import { paginationReducer } from './paginationReducer';

export const reducers = {
    sendRequestReducer,
    tableReducer,
    filterReducer,
    paginationReducer,
};

export const rootReducer = combineReducers(
    reducers,
);
export type RootState = ReturnType<typeof rootReducer>;
