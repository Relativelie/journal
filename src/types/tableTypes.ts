export interface TableState {
    content: any[],
}

export enum TableActionTypes {
    SAVE_TABLE_CONTENT = 'SAVE_TABLE_CONTENT',
}

interface SaveTableContent {
    type: TableActionTypes.SAVE_TABLE_CONTENT,
    value: any[]
}

export type TableAction =
    | SaveTableContent;
