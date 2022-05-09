export interface SearchState {
    searchList: any[],
    searchingItem: string
}

export enum SearchActionTypes {
    SEARCH = 'SEARCH',
}

interface Search {
    type: SearchActionTypes.SEARCH,
    data: any,
    searchingFlag: string
}

export type SearchAction =
    Search;
