import { DataType } from '../../types/dataType';
import { FilterAction, FilterActionTypes } from '../../types/filterTypes';

export const turnOnFilter = (filterBy: string, data: DataType[]): FilterAction => ({
    type: FilterActionTypes.TURN_ON_FILTER,
    filterBy,
    data,
});

export const turnOffFilter = (): FilterAction => ({
    type: FilterActionTypes.TURN_OFF_FILTER,
});
