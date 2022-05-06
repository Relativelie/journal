export interface TableState {
    tableContent: any[],
    tableContentCurrent: any[]
}

export enum TableActionTypes {
    SAVE_TABLE_CONTENT = 'SAVE_TABLE_CONTENT',
    CHANGE_TABLE_CONTENT = 'CHANGE_TABLE_CONTENT',
}

interface SaveTableContent {
    type: TableActionTypes.SAVE_TABLE_CONTENT,
    value: any[]
}

interface ChangeTableContent {
    type: TableActionTypes.CHANGE_TABLE_CONTENT,
    value: any[]
}

export type TableAction =
    | SaveTableContent
    | ChangeTableContent;
