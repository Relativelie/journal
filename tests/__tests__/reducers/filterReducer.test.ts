import { turnOffFilter, turnOnFilter } from '../../../src/store/actions/filterActions';
import { filterReducer } from '../../../src/store/reducers/filterReducer';
import { FilterState } from '../../../src/types/filterTypes';
import { data } from '../../testValues/data';
import { dataTitle } from '../../testValues/data_title';

let state: FilterState;
let stateForTurnOff: FilterState;
beforeEach(() => {
    state = {
        filteredList: [],
        activeFilter: '',
        allFilters: [
            { id: 1, attributeName: 'id', headName: 'ID' },
            { id: 2, attributeName: 'title', headName: 'Заголовок' },
            { id: 3, attributeName: 'body', headName: 'Описание' },
        ],
        isFiltered: false,
    };
    stateForTurnOff = {
        filteredList: data,
        activeFilter: 'id',
        allFilters: [
            { id: 1, attributeName: 'id', headName: 'ID' },
            { id: 2, attributeName: 'title', headName: 'Заголовок' },
            { id: 3, attributeName: 'body', headName: 'Описание' },
        ],
        isFiltered: true,
    };
});

describe('filter reducer', () => {
    test('turn on filter for nested filtered value', () => {
        const newState = filterReducer(
            state,
            turnOnFilter('title', data),
        );
        expect(newState).toStrictEqual({
            ...state,
            filteredList: dataTitle,
            activeFilter: 'title',
            isFiltered: true,
        });
    });

    test('turn on filter for not nested filtered value', () => {
        const newState = filterReducer(
            state,
            turnOnFilter('id', data),
        );
        expect(newState).toStrictEqual({
            ...state,
            filteredList: data,
            activeFilter: 'id',
            isFiltered: true,
        });
    });

    test('turn off filter', () => {
        const newState = filterReducer(
            stateForTurnOff,
            turnOffFilter(),
        );
        expect(newState).toStrictEqual({
            ...stateForTurnOff,
            filteredList: [],
            isFiltered: false,
            activeFilter: '',
        });
    });
});
