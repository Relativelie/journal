export interface PaginationState {
    currentPage: number,
    itemsPerPage: number
}

export enum PaginationActionTypes {
    CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE',
}

interface ChangeCurrentPage {
    type: PaginationActionTypes.CHANGE_CURRENT_PAGE,
    to: number
}

export type PaginationAction =
    | ChangeCurrentPage;
