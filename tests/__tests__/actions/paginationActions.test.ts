import { calcListAmount, changeCurrentPage, changePaginatedList } from '../../../src/store/actions/paginationActions';
import { PaginationActionTypes } from '../../../src/types/paginationTypes';

describe('pagination actions', () => {
    test('change current page', () => {
        expect(changeCurrentPage(7)).toEqual({
            type: PaginationActionTypes.CHANGE_CURRENT_PAGE,
            to: 7,
        });
    });

    test('change paginated list', () => {
        expect(changePaginatedList([{
            id: 11, userId: 1, title: 'fv', body: 'hh',
        }])).toEqual({
            type: PaginationActionTypes.CHANGE_PAGINATED_LIST,
            data: [{
                id: 11, userId: 1, title: 'fv', body: 'hh',
            }],
        });
    });

    test('calculate paginate list amount', () => {
        expect(calcListAmount([{
            id: 11, userId: 1, title: 'fv', body: 'hh',
        }])).toEqual({
            type: PaginationActionTypes.CALC_LIST_AMOUNT,
            data: [{
                id: 11, userId: 1, title: 'fv', body: 'hh',
            }],
        });
    });
});
