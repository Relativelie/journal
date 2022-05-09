import { search } from '../../../src/store/actions/searchActions';
import { SearchActionTypes } from '../../../src/types/searchTypes';

describe('search actions', () => {
    test('search', () => {
        expect(search([{ id: 8 }], 'rt')).toEqual({
            type: SearchActionTypes.SEARCH,
            data: [{ id: 8 }],
            searchingFlag: 'rt',
        });
    });
});
