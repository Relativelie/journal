import { DataType } from './dataType';

export interface SearchState {
    searchList: DataType[],
    searchingItem: string
}

export enum SearchActionTypes {
    SEARCH = 'SEARCH',
}

interface Search {
    type: SearchActionTypes.SEARCH,
    data: DataType[],
    searchingFlag: string
}

export type SearchAction =
    Search;
