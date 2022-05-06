import { TableAction, TableActionTypes } from '../../types/tableTypes';

export const saveTableContent = (value: any[]): TableAction => ({
    type: TableActionTypes.SAVE_TABLE_CONTENT,
    value,
});

export const changeTableContent = (value: any[]): TableAction => ({
    type: TableActionTypes.CHANGE_TABLE_CONTENT,
    value,
});
