import { PaginationState, PaginationAction, PaginationActionTypes } from '../../types/paginationTypes';

const initialState: PaginationState = {
    currentPage: 1,
    allPages: 1,
    itemsPerPage: 10,
    paginatedList: [],
};

export const paginationReducer = (state = initialState, action: PaginationAction): PaginationState => {
    switch (action.type) {
        case PaginationActionTypes.CHANGE_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.to,
            };
        }
        case PaginationActionTypes.CHANGE_PAGINATED_LIST: {
            const indexOfLastList = state.currentPage * state.itemsPerPage;
            const indexOfFirstList = indexOfLastList - state.itemsPerPage;
            const currentList = action.data.slice(indexOfFirstList, indexOfLastList);
            return {
                ...state,
                paginatedList: currentList,
            };
        }

        case PaginationActionTypes.CALC_LIST_AMOUNT: {
            const amount = Math.ceil(action.data.length / state.itemsPerPage);
            return {
                ...state,
                allPages: amount,
            };
        }
        default:
            return state;
    }
};
