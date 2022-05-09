import { DataType } from '../../types/dataType';
import { PaginationActionTypes, PaginationAction } from '../../types/paginationTypes';

export const changeCurrentPage = (to: number): PaginationAction => ({
    type: PaginationActionTypes.CHANGE_CURRENT_PAGE,
    to,
});

export const changePaginatedList = (data: DataType[]): PaginationAction => ({
    type: PaginationActionTypes.CHANGE_PAGINATED_LIST,
    data,
});

export const calcListAmount = (data: DataType[]): PaginationAction => ({
    type: PaginationActionTypes.CALC_LIST_AMOUNT,
    data,
});
