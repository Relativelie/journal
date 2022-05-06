import { PaginationActionTypes, PaginationAction } from '../../types/paginationTypes';

export const changeCurrentPage = (to: number): PaginationAction => ({
    type: PaginationActionTypes.CHANGE_CURRENT_PAGE,
    to,
});
