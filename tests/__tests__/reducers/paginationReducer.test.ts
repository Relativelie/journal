import { calcListAmount, changeCurrentPage, changePaginatedList } from '../../../src/store/actions/paginationActions';
import { paginationReducer } from '../../../src/store/reducers/paginationReducer';
import { PaginationState } from '../../../src/types/paginationTypes';
import { data } from '../../testValues/data';

let state: PaginationState;
let stateTwo: PaginationState;
beforeEach(() => {
    state = {
        currentPage: 1,
        allPages: 10,
        itemsPerPage: 10,
        paginatedList: [],
    };
    stateTwo = {
        currentPage: 1,
        allPages: 1,
        itemsPerPage: 1,
        paginatedList: [],
    };
});

describe('pagination reducer', () => {
    test('change current page', () => {
        const newState = paginationReducer(
            state,
            changeCurrentPage(3),
        );
        expect(newState).toStrictEqual({
            ...state,
            currentPage: 3,
        });
    });

    test('change paginated list', () => {
        const newState = paginationReducer(
            stateTwo,
            changePaginatedList(data),
        );
        expect(newState).toStrictEqual({
            ...stateTwo,
            paginatedList: [
                {
                    userId: 1,
                    id: 1,
                    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
                },
            ],
        });
    });

    test('calc list amount', () => {
        const newState = paginationReducer(
            state,
            calcListAmount(data),
        );
        expect(newState).toStrictEqual({
            ...state,
            allPages: 1,
        });
    });
});
