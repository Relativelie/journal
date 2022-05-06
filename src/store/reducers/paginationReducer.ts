import { PaginationState, PaginationAction, PaginationActionTypes } from '../../types/paginationTypes';

const initialState: PaginationState = {
    currentPage: 1,
    itemsPerPage: 10,
};

export const paginationReducer = (state = initialState, action: PaginationAction): PaginationState => {
    switch (action.type) {
        case PaginationActionTypes.CHANGE_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.to,
            };
        }
    
        default:
            return state;
    }
};
