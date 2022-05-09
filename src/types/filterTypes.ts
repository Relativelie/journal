import { DataType } from './dataType';

export type FilterObj = {
    id: number,
    attributeName: string,
    headName: string
};

export interface FilterState {
    filteredList: DataType[],
    activeFilter: string,
    allFilters: FilterObj[],
    isFiltered: boolean,
}

export enum FilterActionTypes {
    TURN_OFF_FILTER = 'TURN_OFF_FILTER',
    TURN_ON_FILTER = 'TURN_ON_FILTER',
}

interface TurnOffFilter {
    type: FilterActionTypes.TURN_OFF_FILTER,
}

interface TurnOnFilter {
    type: FilterActionTypes.TURN_ON_FILTER,
    filterBy: string,
    data: DataType[]
}

export type FilterAction =
    TurnOnFilter
    | TurnOffFilter;
