import { TableAction, TableActionTypes } from '../../types/tableTypes';

export const saveTableContent = (value: any[]): TableAction => ({
    type: TableActionTypes.SAVE_TABLE_CONTENT,
    value,
});
