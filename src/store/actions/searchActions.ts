import { SearchAction, SearchActionTypes } from '../../types/searchTypes';

export const search = (data: any, searchingFlag: string): SearchAction => ({
    type: SearchActionTypes.SEARCH,
    data,
    searchingFlag,
});
