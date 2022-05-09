import { DataType } from './dataType';

export interface TableState {
    content: DataType[],
}

export enum TableActionTypes {
    SAVE_TABLE_CONTENT = 'SAVE_TABLE_CONTENT',
}

interface SaveTableContent {
    type: TableActionTypes.SAVE_TABLE_CONTENT,
    value: DataType[]
}

export type TableAction =
    | SaveTableContent;
