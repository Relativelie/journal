import { DataType } from './dataType';

export interface PaginationState {
    currentPage: number,
    allPages: number,
    itemsPerPage: number,
    paginatedList: DataType[],
}

export enum PaginationActionTypes {
    CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE',
    CHANGE_PAGINATED_LIST = 'CHANGE_PAGINATED_LIST',
    CALC_LIST_AMOUNT = 'CALC_LIST_AMOUNT',
}

interface ChangeCurrentPage {
    type: PaginationActionTypes.CHANGE_CURRENT_PAGE,
    to: number
}

interface ChangePaginatedList {
    type: PaginationActionTypes.CHANGE_PAGINATED_LIST,
    data: DataType[]
}

interface CalcPaginationAmount {
    type: PaginationActionTypes.CALC_LIST_AMOUNT,
    data: DataType[]
}

export type PaginationAction =
    | ChangeCurrentPage
    | ChangePaginatedList
    | CalcPaginationAmount;
