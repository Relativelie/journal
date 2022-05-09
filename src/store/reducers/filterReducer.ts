import {
    FilterAction,
    FilterActionTypes,
    FilterState,
} from '../../types/filterTypes';

const initialState: FilterState = {
    filteredList: [],
    activeFilter: '',
    allFilters: [
        { id: 1, attributeName: 'id', headName: 'ID' },
        { id: 2, attributeName: 'title', headName: 'Заголовок' },
        { id: 3, attributeName: 'body', headName: 'Описание' },
    ],
    isFiltered: false,
};

export const filterReducer = (
    state = initialState,
    action: FilterAction,
): FilterState => {
    switch (action.type) {
        case FilterActionTypes.TURN_ON_FILTER: {
            const filteredItems:any = [...action.data];
            const filteringFlag = action.filterBy;
            if (filteredItems.length !== 0) {
                if (!Number.isNaN(parseInt(filteredItems[0][filteringFlag], 10))) {
                    filteredItems.sort(
                        (first:any, second: any) => first[filteringFlag] - second[filteringFlag],
                    );
                } else {
                    filteredItems.sort((first:any, second:any) => first[filteringFlag].localeCompare(second[filteringFlag]));
                }
            }

            return {
                ...state,
                filteredList: filteredItems,
                activeFilter: action.filterBy,
                isFiltered: true,
            };
        }
        case FilterActionTypes.TURN_OFF_FILTER: {
            return {
                ...state,
                filteredList: [],
                isFiltered: false,
                activeFilter: '',
            };
        }
        default:
            return state;
    }
};
