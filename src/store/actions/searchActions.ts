import { DataType } from '../../types/dataType';
import { SearchAction, SearchActionTypes } from '../../types/searchTypes';

export const search = (data: DataType[], searchingFlag: string): SearchAction => ({
    type: SearchActionTypes.SEARCH,
    data,
    searchingFlag,
});
