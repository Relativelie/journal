import { TableState, TableAction, TableActionTypes } from '../../types/tableTypes';

const initialState: TableState = {
    tableContent: [],
    tableContentCurrent: [],
};

export const tableReducer = (state = initialState, action: TableAction): TableState => {
    switch (action.type) {
        case TableActionTypes.SAVE_TABLE_CONTENT: {
            return {
                ...state,
                tableContent: action.value,
            };
        }
        case TableActionTypes.CHANGE_TABLE_CONTENT: {
            return {
                ...state,
                tableContentCurrent: action.value,
            };
        }
        default:
            return state;
    }
};
