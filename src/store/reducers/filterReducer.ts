import { FilterAction, FilterActionTypes, FilterState } from '../../types/filterTypes';

const initialState: FilterState = {
    filteredList: [],
    activeFilter: '',
    allFilters: {
        id: 'ID',
        title: 'Заголовок',
        body: 'Описание',
    },
    isFiltered: false,
};

export const filterReducer = (state = initialState, action: FilterAction): FilterState => {
    switch (action.type) {
        case FilterActionTypes.TURN_ON_FILTER: {
            const filteredItems = [...action.data];
            const filteringFlag = action.filterBy;
            if (!Number.isNaN(parseInt(filteredItems[0][filteringFlag], 10))) {
                filteredItems.sort((first, second) => first[filteringFlag] - second[filteringFlag]);
            } else {
                filteredItems.sort((first, second) => first[filteringFlag].localeCompare(second[filteringFlag]));
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
