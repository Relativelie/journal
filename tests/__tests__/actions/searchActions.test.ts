import { search } from '../../../src/store/actions/searchActions';
import { SearchActionTypes } from '../../../src/types/searchTypes';

describe('search actions', () => {
    test('search', () => {
        expect(search([{
            id: 5, userId: 2, title: 'ffv', body: 'hgh',
        }], 'rt')).toEqual({
            type: SearchActionTypes.SEARCH,
            data: [{
                id: 5, userId: 2, title: 'ffv', body: 'hgh',
            }],
            searchingFlag: 'rt',
        });
    });
});
