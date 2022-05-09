import { TableState, TableAction, TableActionTypes } from '../../types/tableTypes';

const initialState: TableState = {
    content: [],
};

export const tableReducer = (state = initialState, action: TableAction): TableState => {
    switch (action.type) {
        case TableActionTypes.SAVE_TABLE_CONTENT: {
            return {
                ...state,
                content: action.value,
            };
        }

        default:
            return state;
    }
};
