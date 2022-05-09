import { turnOffFilter, turnOnFilter } from '../../../src/store/actions/filterActions';
import { FilterActionTypes } from '../../../src/types/filterTypes';

describe('filter actions', () => {
    test('action to turn on filter', () => {
        expect(turnOnFilter('title', [{
            id: 1, userId: 2, title: 'ffv', body: 'hgh',
        }])).toEqual({
            type: FilterActionTypes.TURN_ON_FILTER,
            filterBy: 'title',
            data: [{
                id: 1, userId: 2, title: 'ffv', body: 'hgh',
            }],
        });
    });

    test('action to turn off filter', () => {
        expect(turnOffFilter()).toEqual({
            type: FilterActionTypes.TURN_OFF_FILTER,
        });
    });
});
