import { SearchState } from '../../../src/types/searchTypes';
import { searchReducer } from '../../../src/store/reducers/searchReducer';
import { search } from '../../../src/store/actions/searchActions';
import { data } from '../../testValues/data';

let state: SearchState;
let stateTwo: SearchState;
beforeEach(() => {
    state = {
        searchList: [],
        searchingItem: '',
    };
    stateTwo = {
        searchList: [{
            userId: 1,
            id: 1,
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        }],
        searchingItem: '',
    };
});

describe('search reducer', () => {
    test('search with existed flag in data', () => {
        const newState = searchReducer(
            state,
            search(data, 'sunt aut facere repellat'),
        );
        expect(newState).toStrictEqual({
            ...state,
            searchList: [{
                userId: 1,
                id: 1,
                title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
            }],
            searchingItem: 'sunt aut facere repellat',
        });
    });

    test('search with non-existed flag in data', () => {
        const newState = searchReducer(
            state,
            search(data, 'hnhgbvg'),
        );
        expect(newState).toStrictEqual({
            ...state,
            searchList: [],
            searchingItem: 'hnhgbvg',
        });
    });

    test('search with flag include only spaces', () => {
        const newState = searchReducer(
            stateTwo,
            search(data, '   '),
        );
        expect(newState).toStrictEqual({
            ...state,
            searchingItem: '',
        });
    });
});
